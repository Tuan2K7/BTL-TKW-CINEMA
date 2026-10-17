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
    function refreshOptions() {
    const rows = CinemaStore.orders().filter(o => o.status === 'paid');
    options($('caMovie'), [...new Map(rows.map(o => [o.movieId,o.movieTitle]))], 'Tất cả phim');
    const shows = rows.filter(o => !$('caMovie').value || o.movieId === $('caMovie').value);
    options($('caShow'), [...new Map(shows.map(o => [showKey(o),`${o.movieTitle} · ${o.showDate} · ${o.showTime}`]))], 'Tất cả suất chiếu');
  }
  function clearResult() {
    $('caRows').replaceChildren(); $('caTickets').textContent = '—'; $('caRevenue').textContent = '—'; $('caOrders').textContent = '—'; $('caEmpty').hidden = true;
  }
  function render() {
    if (CinemaStore.currentUser()?.role !== 'admin') { syncAccess(); return; }
    $('caError').hidden = true;
    try {
      refreshOptions();
      const data = CinemaStore.statistics($('caDay').value,$('caMovie').value,$('caShow').value);
      $('caTickets').textContent = data.tickets.toLocaleString('vi-VN');
      $('caRevenue').textContent = money(data.revenue); $('caOrders').textContent = data.rows.length;
      $('caEmpty').hidden = data.rows.length > 0;
      const groups = new Map();
      data.rows.forEach(o => {
        const key = showKey(o);const g = groups.get(key) || { title:o.movieTitle,date:o.showDate,time:o.showTime,tickets:0,revenue:0 };
        g.tickets += o.seats.length;g.revenue += o.total;groups.set(key,g);
      });
      $('caRows').replaceChildren();
      [...groups.values()].sort((a,b) => a.title.localeCompare(b.title,'vi') || a.time.localeCompare(b.time)).forEach(g => {
        const tr = document.createElement('tr');
        [g.title,g.date,g.time,mode === 'tickets' ? g.tickets : money(g.revenue)].forEach(v => {
          const td = document.createElement('td');td.textContent = v;tr.append(td);
        });$('caRows').append(tr);
      });
    } catch(e) { clearResult();$('caError').textContent = e.message; $('caError').hidden = false; }
  }
  function setMode(next) {
    mode = next === 'revenue' ? 'revenue' : 'tickets';
    $('cinemaAdminTitle').textContent = mode === 'tickets' ? 'Thống kê vé trong ngày' : 'Thống kê doanh thu';
    $('caTableTitle').textContent = mode === 'tickets' ? 'Số vé theo phim và suất chiếu' : 'Doanh thu theo phim và suất chiếu';
    $('caMetric').textContent = mode === 'tickets' ? 'Số vé' : 'Doanh thu';
    dialog.querySelectorAll('[data-mode]').forEach(btn => { btn.classList.toggle('ca-active',btn.dataset.mode === mode);btn.setAttribute('aria-pressed',String(btn.dataset.mode === mode)); });
  }
  function syncAccess() {
    const allowed = CinemaStore.currentUser()?.role === 'admin'; tools.hidden = !allowed;
    if (!allowed) {if(dialog.open) dialog.close();clearResult();$('caError').hidden = true;}
  }
  tools.querySelectorAll('[data-mode]').forEach(btn => btn.addEventListener('click', () => {
    if(CinemaStore.currentUser()?.role !== 'admin') return syncAccess();
    setMode(btn.dataset.mode);$('caDay').value = CinemaStore.vietnamDate();
    render();if(!dialog.open) dialog.showModal();
  }));
  dialog.querySelectorAll('[data-mode]').forEach(btn => btn.addEventListener('click', () => {setMode(btn.dataset.mode);render();}));
  $('caClose').addEventListener('click', () => dialog.close());
  $('cinemaAdminLogout').addEventListener('click', () => CinemaStore.logout());
  $('caFilters').addEventListener('submit', e => {e.preventDefault();render();});
  ['caDay','caMovie','caShow'].forEach(id => $(id).addEventListener('change',render));
  window.addEventListener('cinema:auth',syncAccess);
  window.addEventListener('cinema:orders', () => {if(dialog.open) render();});
  syncAccess();
})();
