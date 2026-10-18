document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const movieId = params.get('id');
  const showDate = params.get('date');
  const showTime = params.get('time');
  const movie = ALL_MOVIES.find(item => item.id === movieId);

  const isValidShow = movie?.schedules.some(schedule =>
    schedule.date === showDate && schedule.times.includes(showTime)
  );

  if (!isValidShow) {
    alert('Không tìm thấy phim hoặc suất chiếu hợp lệ.');
    location.href = 'index.html';
    return;
  }

  const getElement = id => document.getElementById(id);
  const seatMap = getElement('seatMap');
  const paymentOverlay = getElement('overlay');
  const payButton = getElement('payBtn');
  const confirmButton = getElement('confirmPay');
  const seatRows = 'ABCDEFGHIJK';
  const vipRows = 'DEFGH';
  const seatPrice = { normal: 50000, vip: 100000 };

  let selectedSeats = new Set();
  let checkoutId = null;
  let isSaving = false;
  let storageAvailable = true;

  function createSeatMap() {
    for (const rowLetter of seatRows) {
      const row = document.createElement('div');
      row.className = 'row';

      for (let number = 1; number <= 14; number++) {
        const isVip = vipRows.includes(rowLetter) && number >= 5 && number <= 10;
        const seat = document.createElement('div');
        seat.className = `seat ${isVip ? 'vip' : 'normal'}`;
        seat.dataset.id = `${rowLetter}${number}`;
        seat.textContent = seat.dataset.id;
        row.append(seat);
      }

      seatMap.append(row);
    }
  }

  createSeatMap();
  const seats = [...seatMap.querySelectorAll('.seat[data-id]')];

  function priceOf(seat) {
    return seatPrice[seat.classList.contains('vip') ? 'vip' : 'normal'];
  }

  function selectedTotal() {
    return seats
      .filter(seat => selectedSeats.has(seat.dataset.id))
      .reduce((total, seat) => total + priceOf(seat), 0);
  }

  function formatMoney(amount) {
    return `${amount.toLocaleString('vi-VN')}₫`;
  }

  function updateSummary() {
    getElement('count').textContent = selectedSeats.size;
    getElement('total').textContent = formatMoney(selectedTotal());
    payButton.disabled = !selectedSeats.size || isSaving || !storageAvailable;
  }

  function syncBookedSeats() {
    try {
      const bookedSeats = CinemaStore.booked(movieId, showDate, showTime);
      storageAvailable = true;

      seats.forEach(seat => {
        const isBooked = bookedSeats.has(seat.dataset.id);

        seat.classList.toggle('booked', isBooked);
        if (isBooked) selectedSeats.delete(seat.dataset.id);
        seat.classList.toggle('selected', selectedSeats.has(seat.dataset.id));
      });
    } catch (error) {
      storageAvailable = false;
      alert(error.message);
    }

    updateSummary();
  }

  function showSelectedSeats() {
    const list = getElement('selectedList');
    const items = [...selectedSeats].map(seatId => {
      const item = document.createElement('li');
      item.textContent = seatId;
      return item;
    });

    list.replaceChildren(...items);
    getElement('payTotal').textContent = formatMoney(selectedTotal());
    paymentOverlay.classList.remove('hidden');
  }

  function closePayment() {
    paymentOverlay.classList.add('hidden');
    checkoutId = null;
  }

  function createCheckoutId() {
    return typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  function showMovieInfo() {
    document.querySelector('.sidebar h2').textContent = movie.title;
    document.querySelector('.sidebar .poster img').src = movie.poster;
    document.querySelectorAll('.sidebar p')[0].textContent = `Ngày chiếu: ${showDate}`;
    document.querySelectorAll('.sidebar p')[1].textContent = `Suất chiếu: ${showTime}`;
    document.title = `Đặt vé: ${movie.title}`;
  }

  showMovieInfo();

  seatMap.addEventListener('click', event => {
    if (isSaving || !paymentOverlay.classList.contains('hidden') || !storageAvailable) return;

    const seat = event.target.closest('.seat[data-id]');
    if (!seat || seat.classList.contains('booked')) return;

    if (selectedSeats.has(seat.dataset.id)) {
      selectedSeats.delete(seat.dataset.id);
    } else {
      selectedSeats.add(seat.dataset.id);
    }

    seat.classList.toggle('selected', selectedSeats.has(seat.dataset.id));
    updateSummary();
  });

  payButton.addEventListener('click', () => {
    syncBookedSeats();
    if (!storageAvailable || !selectedSeats.size) return;

    checkoutId = createCheckoutId();
    getElement('qrImage').src = './assets/img/qr.png';
    showSelectedSeats();
  });

  getElement('closePay').addEventListener('click', () => {
    if (!isSaving) closePayment();
  });

  confirmButton.addEventListener('click', async () => {
    if (isSaving || !checkoutId || !selectedSeats.size || paymentOverlay.classList.contains('hidden')) return;

    isSaving = true;
    confirmButton.disabled = true;
    updateSummary();

    try {
      const orderSeats = seats
        .filter(seat => selectedSeats.has(seat.dataset.id))
        .map(seat => ({ id: seat.dataset.id, price: priceOf(seat) }));

      const order = await CinemaStore.recordPayment({
        id: checkoutId,
        movieId,
        movieTitle: movie.title,
        showDate,
        showTime,
        seats: orderSeats
      });

      selectedSeats.clear();
      closePayment();
      alert(`Thanh toán mô phỏng thành công! Đã lưu ${order.seats.length} vé, tổng ${formatMoney(order.total)}.`);
    } catch (error) {
      alert(error.message);
      closePayment();
    } finally {
      isSaving = false;
      confirmButton.disabled = false;
      syncBookedSeats();
    }
  });

  window.addEventListener('storage', event => {
    if (event.key !== CinemaStore.KEYS.orders && event.key !== null) return;

    if (!isSaving) {
      closePayment();
      syncBookedSeats();
    }
  });

  syncBookedSeats();
});
