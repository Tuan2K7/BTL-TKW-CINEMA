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