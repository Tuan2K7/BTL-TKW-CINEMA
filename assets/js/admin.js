/* NOTE ADMIN 03: Hộp thống kê được tạo bằng JS, không cần admin.html.
 * Chỉ nút mở hộp xuất hiện khi đăng nhập đúng Admin; khách hàng không thấy.
 */
(() => {
  const tools = document.createElement('div');
  tools.id = 'cinemaAdminTools'; tools.hidden = true;
  tools.innerHTML = '<span>QUẢN LÝ</span><button type="button" data-mode="tickets">Thống kê vé</button><button type="button" data-mode="revenue">Doanh thu</button><button type="button" id="cinemaAdminLogout">Đăng xuất</button>';
  const dialog = document.createElement('dialog'); dialog.id = 'cinemaAdminDialog';
  dialog.setAttribute('aria-labelledby','cinemaAdminTitle');
  dialog.innerHTML = `
    <div class="ca-heading"><div><small>CINEMA / ADMIN</small><h2 id="cinemaAdminTitle">Thống kê vé trong ngày</h2></div><button type="button" id="caClose" aria-label="Đóng thống kê">Đóng ×</button></div>
    <p class="ca-note">Dữ liệu thanh toán mô phỏng trên trình duyệt này. Ngày thống kê tính theo giờ Việt Nam.</p>
    <div class="ca-tabs"><button type="button" data-mode="tickets">Thống kê vé trong ngày</button><button type="button" data-mode="revenue">Thống kê doanh thu</button></div>
    <form id="caFilters"><label>Ngày thanh toán<input type="date" id="caDay" required></label><label>Phim<select id="caMovie"><option value="">Tất cả phim</option></select></label><label>Suất chiếu<select id="caShow"><option value="">Tất cả suất chiếu</option></select></label><button type="submit">Xem thống kê</button></form>
    <p id="caError" role="alert" hidden></p>
    <div class="ca-totals" aria-live="polite"><div><span>Tổng số vé</span><strong id="caTickets">0</strong></div><div><span>Tổng doanh thu</span><strong id="caRevenue">0 ₫</strong></div><div><span>Giao dịch thành công</span><strong id="caOrders">0</strong></div></div>
    <h3 id="caTableTitle">Số vé theo phim và suất chiếu</h3>
    <div class="ca-table-wrap"><table><thead><tr><th>Phim</th><th>Ngày chiếu</th><th>Suất chiếu</th><th id="caMetric">Số vé</th></tr></thead><tbody id="caRows"></tbody></table></div>
    <p id="caEmpty" hidden>Không có giao dịch thanh toán thành công phù hợp với bộ lọc.</p>
    <p class="ca-note">Một ghế tương ứng một vé. Doanh thu là tổng tiền đã ghi nhận, không tính các lần mở rồi đóng hộp thanh toán.</p>`;
  document.body.append(tools,dialog);
  const $ = id => document.getElementById(id);
  let mode = 'tickets';
  const money = n => n.toLocaleString('vi-VN') + ' ₫';
  const showKey = o => JSON.stringify([o.movieId,o.showDate,o.showTime]);
  function options(select, pairs, label) {
    const old = select.value; select.replaceChildren(new Option(label,''));
    pairs.forEach(([id,name]) => select.add(new Option(name,id)));
    if (pairs.some(([id]) => id === old)) select.value = old;
  }