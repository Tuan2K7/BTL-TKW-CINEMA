/* NOTE ADMIN 01: Dữ liệu dùng chung cho đăng nhập, đặt vé và thống kê.
 * Bản đồ án chạy localStorage: KHÔNG phải phân quyền hoặc thanh toán thật.
 * Không dùng tài khoản/mật khẩu thật. Backend phải kiểm tra quyền khi triển khai thực tế.
 */
(() => {
  'use strict';
  const KEYS = { users: 'cinema.users.v1', orders: 'cinema.orders.v1' };
  // NOTE: Đổi tài khoản Admin thử nghiệm tại đây. Không có ô chọn role khi đăng ký.
  const ADMIN = { email: 'admin@cinema.vn', password: 'Admin@123', accountName: 'Admin', role: 'admin' };
  function read(key, fallback) {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    try { return JSON.parse(raw); }
    catch { throw new Error('Dữ liệu trình duyệt bị lỗi (' + key + '). Hãy sao lưu dữ liệu trước khi xử lý.'); }
  }
  function list(key) {
    const value = read(key, []);
    if (!Array.isArray(value)) throw new Error('Dữ liệu danh sách không hợp lệ: ' + key);
    return value;
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch { throw new Error('Không lưu được dữ liệu. Hãy kiểm tra quyền lưu trữ hoặc dung lượng trình duyệt.'); }
  }
  const notifyAuth = () => window.dispatchEvent(new Event('cinema:auth'));
  function users() {
    const result = list(KEYS.users);
    // Giữ tài khoản khách hàng được đăng ký bằng code gốc.
    const legacy = read('user', null);
    if (legacy?.email && !result.some(u => u.email.toLowerCase() === legacy.email.toLowerCase())) {
      result.push({ ...legacy, email: legacy.email.toLowerCase(), role: 'user' });
    }
    return result;
  }
  function currentUser() {
    try {
      if (localStorage.getItem('isLoggedIn') !== 'true') return null;
      const u = read('loggedInUser', null);
      if (!u || !u.email) return null;
      const isAdmin = u.email === ADMIN.email && u.role === 'admin';
      return { email: u.email, accountName: u.accountName || u.email, role: isAdmin ? 'admin' : 'user' };
    } catch { return null; }
  }
  function login(email, password) {
    email = email.trim().toLowerCase();
    let u;
    if (email === ADMIN.email && password === ADMIN.password) u = ADMIN;
    else if (email !== ADMIN.email) u = users().find(v => v.email.toLowerCase() === email && v.password === password);
    if (!u) throw new Error('Sai email hoặc mật khẩu.');
    // Không lưu mật khẩu vào phiên đăng nhập.
    const session = { email, accountName: u.accountName, role: email === ADMIN.email ? 'admin' : 'user' };
    write('loggedInUser', session);
    localStorage.setItem('isLoggedIn', 'true');
    notifyAuth();
    return session;
  }
 function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    notifyAuth();
  }
  function register(data) {
    const email = data.email.trim().toLowerCase();
    const all = users();
    if (email === ADMIN.email || all.some(u => u.email.toLowerCase() === email)) throw new Error('Email đã được sử dụng.');
    // Role luôn là user dù dữ liệu từ biểu mẫu có chứa role khác.
    all.push({ ...data, email, role: 'user' });
    write(KEYS.users, all);
  }
  function vietnamDate(iso = new Date().toISOString()) {
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(iso));
    const value = t => parts.find(p => p.type === t).value;
    return `${value('year')}-${value('month')}-${value('day')}`;
  }
  function orders() {
    const rows = list(KEYS.orders);
    if (rows.some(o => !o || typeof o.movieId !== 'string' || !Array.isArray(o.seats) || !o.seats.length || !Number.isFinite(o.total) || o.total < 0 || Number.isNaN(Date.parse(o.paidAt)))) {
      throw new Error('Lịch sử giao dịch không hợp lệ. Hãy kiểm tra dữ liệu đã lưu.');
    }
    return rows;
  }
  function booked(movieId, showDate, showTime) {
    return new Set(orders().filter(o => o.status === 'paid' && o.movieId === movieId && o.showDate === showDate && o.showTime === showTime).flatMap(o => o.seats.map(s => s.id)));
  }
  function recordPayment(data) {
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
      // Lưu thành công trước khi thông báo thanh toán và đánh dấu ghế.
      write(KEYS.orders, [...all, row]);
      window.dispatchEvent(new Event('cinema:orders'));
      return row;
    };
    // Web Locks ngăn hai tab cùng mua một ghế trên localhost (nếu trình duyệt hỗ trợ).
    return navigator.locks ? navigator.locks.request('cinema-payment', commit) : Promise.resolve().then(commit);
  }
  function statistics(day, movieId = '', showKey = '') {
    if (currentUser()?.role !== 'admin') throw new Error('Chỉ Admin được xem thống kê.');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || Number.isNaN(Date.parse(day+'T00:00:00Z')) || new Date(day+'T00:00:00Z').toISOString().slice(0,10) !== day) throw new Error('Ngày thống kê không hợp lệ.');
    const rows = orders().filter(o => o.status === 'paid' && vietnamDate(o.paidAt) === day && (!movieId || o.movieId === movieId) && (!showKey || JSON.stringify([o.movieId,o.showDate,o.showTime]) === showKey));
    return { rows, tickets: rows.reduce((n,o) => n+o.seats.length,0), revenue: rows.reduce((n,o) => n+o.total,0) };
  }
  window.CinemaStore = { KEYS, currentUser, login, logout, register, vietnamDate, orders, booked, recordPayment, statistics };
  window.addEventListener('storage', e => {
    if (['isLoggedIn','loggedInUser',null].includes(e.key)) notifyAuth();
    if (e.key === KEYS.orders || e.key === null) window.dispatchEvent(new Event('cinema:orders'));
  });
})();
