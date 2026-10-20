/* NOTE ADMIN 01: Dữ liệu dùng chung cho đăng nhập, đặt vé và thống kê.
 * Bản đồ án chạy localStorage: KHÔNG phải phân quyền hoặc thanh toán thật.
 * Không dùng tài khoản/mật khẩu thật. Backend phải kiểm tra quyền khi triển khai thực tế.
 */
(() => {
  // Ngăn biến nội bộ lọt ra phạm vi toàn cục; chỉ các hàm được xuất ở cuối mới dùng được.
  'use strict';
  // Tên khóa localStorage để tài khoản và đơn vé được lưu riêng, có phiên bản dữ liệu.
  const KEYS = { users: 'cinema.users.v1', orders: 'cinema.orders.v1' };
  // NOTE: Đổi tài khoản Admin thử nghiệm tại đây. Không có ô chọn role khi đăng ký.
  const ADMIN = { email: 'admin@cinema.vn', password: 'Admin@123', accountName: 'Admin', role: 'admin' };
  function read(key, fallback) {
    // Đọc chuỗi từ localStorage; nếu chưa có dữ liệu thì trả về giá trị mặc định.
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    // Chuyển chuỗi JSON về JavaScript; báo lỗi rõ nếu dữ liệu đã lưu bị hỏng.
    try { return JSON.parse(raw); }
    catch { throw new Error('Dữ liệu trình duyệt bị lỗi (' + key + '). Hãy sao lưu dữ liệu trước khi xử lý.'); }
  }
  function list(key) {
    // Các khóa danh sách phải chứa mảng để những hàm gọi sau có thể duyệt an toàn.
    const value = read(key, []);
    if (!Array.isArray(value)) throw new Error('Dữ liệu danh sách không hợp lệ: ' + key);
    return value;
  }
  function write(key, value) {
    // Chuyển giá trị thành JSON trước khi lưu; ném lỗi nếu trình duyệt không lưu được.
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch { throw new Error('Không lưu được dữ liệu. Hãy kiểm tra quyền lưu trữ hoặc dung lượng trình duyệt.'); }
  }
  // Báo cho các phần giao diện biết trạng thái đăng nhập vừa thay đổi.
  const notifyAuth = () => window.dispatchEvent(new Event('cinema:auth'));
  function users() {
    // Đọc danh sách tài khoản hiện hành.
    const result = list(KEYS.users);
    // Nhập tài khoản từ khóa cũ để người dùng đăng ký bằng phiên bản trước vẫn đăng nhập được.
    const legacy = read('user', null);
    if (legacy?.email && !result.some(u => u.email.toLowerCase() === legacy.email.toLowerCase())) {
      result.push({ ...legacy, email: legacy.email.toLowerCase(), role: 'user' });
    }
    return result;
  }
  function currentUser() {
    // Đọc phiên hiện tại; không trả về mật khẩu cho phần giao diện.
    try {
      if (localStorage.getItem('isLoggedIn') !== 'true') return null;
      const u = read('loggedInUser', null);
      if (!u || !u.email) return null;
      const isAdmin = u.email === ADMIN.email && u.role === 'admin';
      return { email: u.email, accountName: u.accountName || u.email, role: isAdmin ? 'admin' : 'user' };
    } catch { return null; }
  }
  function login(email, password) {
    // Chuẩn hóa email để không phân biệt chữ hoa/thường khi dò tài khoản.
    email = email.trim().toLowerCase();
    let u;
    if (email === ADMIN.email && password === ADMIN.password) u = ADMIN;
    else if (email !== ADMIN.email) u = users().find(v => v.email.toLowerCase() === email && v.password === password);
    if (!u) throw new Error('Sai email hoặc mật khẩu.');
    // Phiên chỉ lưu thông tin cần thiết, tuyệt đối không lưu mật khẩu trong đối tượng đăng nhập.
    const session = { email, accountName: u.accountName, role: email === ADMIN.email ? 'admin' : 'user' };
    write('loggedInUser', session);
    localStorage.setItem('isLoggedIn', 'true');
    notifyAuth();
    return session;
  }
 function logout() {
    // Xóa trạng thái phiên khỏi trình duyệt rồi báo các thành phần giao diện cập nhật.
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    notifyAuth();
  }
  function register(data) {
    // Chuẩn hóa email và kiểm tra trùng trước khi thêm tài khoản mới.
    const email = data.email.trim().toLowerCase();
    const all = users();
    if (email === ADMIN.email || all.some(u => u.email.toLowerCase() === email)) throw new Error('Email đã được sử dụng.');
    // Không tin role gửi từ biểu mẫu: tài khoản tự đăng ký luôn là khách hàng.
    all.push({ ...data, email, role: 'user' });
    write(KEYS.users, all);
  }
  function vietnamDate(iso = new Date().toISOString()) {
    // Chuyển thời điểm sang ngày lịch tại Việt Nam, tránh lệch ngày do múi giờ máy.
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(iso));
    const value = t => parts.find(p => p.type === t).value;
    return `${value('year')}-${value('month')}-${value('day')}`;
  }
  function orders() {
    // Đọc đơn hàng và kiểm tra cấu trúc cơ bản trước khi dùng để tính ghế/doanh thu.
    const rows = list(KEYS.orders);
    if (rows.some(o => !o || typeof o.movieId !== 'string' || !Array.isArray(o.seats) || !o.seats.length || !Number.isFinite(o.total) || o.total < 0 || Number.isNaN(Date.parse(o.paidAt)))) {
      throw new Error('Lịch sử giao dịch không hợp lệ. Hãy kiểm tra dữ liệu đã lưu.');
    }
    return rows;
  }
  function booked(movieId, showDate, showTime) {
    // Trả về Set mã ghế đã thanh toán cho đúng phim, ngày và suất chiếu.
    return new Set(orders().filter(o => o.status === 'paid' && o.movieId === movieId && o.showDate === showDate && o.showTime === showTime).flatMap(o => o.seats.map(s => s.id)));
  }
  function recordPayment(data) {
    // Gói kiểm tra và lưu vào một hàm để có thể chạy trong khóa đồng bộ giữa các tab.
    const commit = () => {
      const all = orders();
      const previous = all.find(o => o.id === data.id);
      if (previous) return previous; // Chống ghi trùng khi nhấn xác nhận nhiều lần.
      if (!data.id || !data.movieId || !data.seats?.length || new Set(data.seats.map(s => s.id)).size !== data.seats.length) throw new Error('Vui lòng chọn ghế hợp lệ.');
      if (data.seats.some(s => !/^[A-K](?:[1-9]|1[0-4])$/.test(s.id) || ![50000,100000].includes(s.price))) throw new Error('Ghế hoặc giá vé không hợp lệ.');
      const occupied = booked(data.movieId, data.showDate, data.showTime);
      if (data.seats.some(s => occupied.has(s.id))) throw new Error('Có ghế vừa được đặt ở tab khác. Vui lòng chọn lại.');
      const row = { id: data.id, movieId: data.movieId, movieTitle: data.movieTitle, showDate: data.showDate, showTime: data.showTime,
        seats: data.seats.map(s => ({ id: s.id, price: s.price })), total: data.seats.reduce((sum,s) => sum+s.price,0),
        paidAt: new Date().toISOString(), status: 'paid', simulated: true };
      // Chỉ phát sự kiện sau khi đơn đã được lưu thành công vào localStorage.
      write(KEYS.orders, [...all, row]);
      window.dispatchEvent(new Event('cinema:orders'));
      return row;
    };
    // Web Locks tuần tự hóa thao tác thanh toán giữa các tab; fallback chạy trực tiếp nếu không hỗ trợ.
    return navigator.locks ? navigator.locks.request('cinema-payment', commit) : Promise.resolve().then(commit);
  }
  function statistics(day, movieId = '', showKey = '') {
    // Chỉ admin được lấy thống kê; kiểm tra định dạng ngày trước khi lọc đơn hàng.
    if (currentUser()?.role !== 'admin') throw new Error('Chỉ Admin được xem thống kê.');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || Number.isNaN(Date.parse(day+'T00:00:00Z')) || new Date(day+'T00:00:00Z').toISOString().slice(0,10) !== day) throw new Error('Ngày thống kê không hợp lệ.');
    const rows = orders().filter(o => o.status === 'paid' && vietnamDate(o.paidAt) === day && (!movieId || o.movieId === movieId) && (!showKey || JSON.stringify([o.movieId,o.showDate,o.showTime]) === showKey));
    return { rows, tickets: rows.reduce((n,o) => n+o.seats.length,0), revenue: rows.reduce((n,o) => n+o.total,0) };
  }
  // Công khai API tối thiểu để các script giao diện dùng chung dữ liệu này.
  window.CinemaStore = { KEYS, currentUser, login, logout, register, vietnamDate, orders, booked, recordPayment, statistics };
  window.addEventListener('storage', e => {
    // Sự kiện storage báo thay đổi ở tab khác; phát lại sự kiện nội bộ cho giao diện đang mở.
    if (['isLoggedIn','loggedInUser',null].includes(e.key)) notifyAuth();
    if (e.key === KEYS.orders || e.key === null) window.dispatchEvent(new Event('cinema:orders'));
  });
})();
    // Chỉ tài khoản admin cấu hình ở trên được xác thực bằng nhánh riêng.
    // Lọc đơn đã thanh toán theo ngày Việt Nam và các bộ lọc phim/suất nếu được chọn.
