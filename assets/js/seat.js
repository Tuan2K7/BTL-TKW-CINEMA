/* NOTE ADMIN 05: Lưu giao dịch trước khi báo thành công; thống kê lấy từ giao dịch này. */
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const movieId = params.get('id'), date = params.get('date'), time = params.get('time');
  const movie = typeof ALL_MOVIES !== 'undefined' && ALL_MOVIES.find(m => m.id === movieId);
  if (!movie || !movie.schedules?.some(s => s.date === date && s.times.includes(time))) {
    alert('Không tìm thấy phim hoặc suất chiếu hợp lệ.');location.href = 'index.html';return;
  }
  document.querySelector('.sidebar h2').textContent = movie.title;
  document.querySelector('.sidebar .poster img').src = movie.poster;
  document.title = `Đặt vé: ${movie.title}`;
  const info = document.querySelectorAll('.sidebar p');
  info[0].textContent = `Ngày chiếu: ${date}`;info[1].textContent = `Suất chiếu: ${time}`;
  const $ = id => document.getElementById(id);
  const seatMap = $('seatMap'), overlay = $('overlay'), payBtn = $('payBtn'), confirm = $('confirmPay');
  let selected = new Set(), checkoutId = null, saving = false, storageOK = true;
  const seatElements = [...seatMap.querySelectorAll('.seat[data-id]')];
  const price = seat => seat.classList.contains('vip') ? 100000 : 50000;
  const total = () => seatElements.filter(s => selected.has(s.dataset.id)).reduce((n,s) => n+price(s),0);
  const money = n => n.toLocaleString('vi-VN')+'₫';
  function update() {
    $('count').textContent = selected.size;$('total').textContent = money(total());
    payBtn.disabled = !selected.size || saving || !storageOK;
  }
  function syncSeats() {
    try {
      const booked = CinemaStore.booked(movieId,date,time);storageOK = true;
      seatElements.forEach(el => {
        const taken = booked.has(el.dataset.id);el.classList.toggle('booked',taken);
        if(taken) selected.delete(el.dataset.id);
        el.classList.toggle('selected',selected.has(el.dataset.id));
      });
    } catch(e) {storageOK = false;alert(e.message);}
    update();
  }
  seatMap.addEventListener('click', e => {
    if(saving || !overlay.classList.contains('hidden') || !storageOK) return;
    const seat = e.target.closest('.seat[data-id]');if(!seat || seat.classList.contains('booked')) return;
    const id = seat.dataset.id;
    selected.has(id) ? selected.delete(id) : selected.add(id);
    seat.classList.toggle('selected',selected.has(id));update();
  });
  payBtn.addEventListener('click', () => {
    syncSeats();if(!storageOK || !selected.size) return;
    checkoutId = typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : Date.now()+'-'+Math.random().toString(36).slice(2);
    $('selectedList').replaceChildren();selected.forEach(id => {const li=document.createElement('li');li.textContent=id;$('selectedList').append(li);});
    $('payTotal').textContent = money(total());$('qrImage').src='./assets/img/qr.png';
    overlay.classList.remove('hidden');
  });
  $('closePay').addEventListener('click', () => {if(!saving) {overlay.classList.add('hidden');checkoutId=null;}});
  confirm.addEventListener('click', async () => {
    if(saving || !checkoutId || !selected.size || overlay.classList.contains('hidden')) return;
    saving=true;confirm.disabled=true;update();
    try {
      const seats=seatElements.filter(s => selected.has(s.dataset.id)).map(s => ({id:s.dataset.id,price:price(s)}));
      const order=await CinemaStore.recordPayment({id:checkoutId,movieId,movieTitle:movie.title,showDate:date,showTime:time,seats});
      selected.clear();checkoutId=null;overlay.classList.add('hidden');
      alert(`Thanh toán mô phỏng thành công! Đã lưu ${order.seats.length} vé, tổng ${money(order.total)}.`);
    } catch(e) {alert(e.message);checkoutId=null;overlay.classList.add('hidden');}
    finally {saving=false;confirm.disabled=false;syncSeats();}
  });
  // Đồng bộ ghế giữa các tab; đóng bản xác nhận cũ nếu giao dịch ở tab khác thay đổi dữ liệu.
  window.addEventListener('storage', e => {
    if(e.key === CinemaStore.KEYS.orders || e.key === null) {
      if(!saving) {overlay.classList.add('hidden');checkoutId=null;syncSeats();}
    }
  });
  syncSeats();
});
