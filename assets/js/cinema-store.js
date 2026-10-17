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