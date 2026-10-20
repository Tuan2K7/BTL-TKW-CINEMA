document.addEventListener('DOMContentLoaded', () => {
  // Đọc mã phim/ngày/giờ từ URL và tìm dữ liệu phim tương ứng.
  const params = new URLSearchParams(location.search);
  const movieId = params.get('id');
  const showDate = params.get('date');
  const showTime = params.get('time');
  const movie = ALL_MOVIES.find(item => item.id === movieId);

  const isValidShow = movie?.schedules.some(schedule =>
    // Chỉ tiếp tục nếu ngày và giờ truyền lên thực sự có trong lịch phim.
    schedule.date === showDate && schedule.times.includes(showTime)
  );

  if (!isValidShow) {
    // URL thiếu/sai suất chiếu thì báo lỗi và đưa người dùng về trang chính.
    alert('Không tìm thấy phim hoặc suất chiếu hợp lệ.');
    location.href = 'index.html';
    return;
  }

  // Lấy các phần tử giao diện và khai báo sơ đồ, loại hàng VIP, giá vé.
  const getElement = id => document.getElementById(id);
  const seatMap = getElement('seatMap');
  const paymentOverlay = getElement('overlay');
  const payButton = getElement('payBtn');
  const confirmButton = getElement('confirmPay');
  const seatRows = 'ABCDEFGHIJK';
  const vipRows = 'DEFGH';
  const seatPrice = { normal: 50000, vip: 100000 };

  // Trạng thái cục bộ của lần chọn ghế và thao tác thanh toán hiện tại.
  let selectedSeats = new Set();
  let checkoutId = null;
  let isSaving = false;
  let storageAvailable = true;

  function createSeatMap() {
    // Sinh 11 hàng ghế, mỗi hàng 14 ghế, thay vì viết từng ghế trong HTML.
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
  // Lưu danh sách node ghế để các hàm tính tiền và cập nhật trạng thái có thể duyệt.
  const seats = [...seatMap.querySelectorAll('.seat[data-id]')];

  function priceOf(seat) {
    // Giá vé phụ thuộc vào class VIP hay ghế thường của phần tử.
    return seatPrice[seat.classList.contains('vip') ? 'vip' : 'normal'];
  }

  function selectedTotal() {
    // Cộng giá những ghế có mã nằm trong Set selectedSeats.
    return seats
      .filter(seat => selectedSeats.has(seat.dataset.id))
      .reduce((total, seat) => total + priceOf(seat), 0);
  }

  function formatMoney(amount) {
    // Dùng định dạng số Việt Nam và thêm ký hiệu đồng.
    return `${amount.toLocaleString('vi-VN')}₫`;
  }

  function updateSummary() {
    // Cập nhật số ghế, tổng tiền và trạng thái bật/tắt nút thanh toán.
    getElement('count').textContent = selectedSeats.size;
    getElement('total').textContent = formatMoney(selectedTotal());
    payButton.disabled = !selectedSeats.size || isSaving || !storageAvailable;
  }

  function syncBookedSeats() {
    // Đọc các ghế đã bán từ kho dùng chung và cập nhật lại màu trên sơ đồ.
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
    // Tạo danh sách mã ghế được chọn và mở lớp phủ thanh toán.
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
    // Đóng bước thanh toán và bỏ mã đơn tạm để lần sau tạo phiên mới.
    paymentOverlay.classList.add('hidden');
    checkoutId = null;
  }

  function createCheckoutId() {
    // Ưu tiên UUID; dùng chuỗi thời gian/ngẫu nhiên nếu trình duyệt không có randomUUID.
    return typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  function showMovieInfo() {
    // Điền tên, poster, ngày và giờ của suất đang đặt vào thanh bên.
    document.querySelector('.sidebar h2').textContent = movie.title;
    document.querySelector('.sidebar .poster img').src = movie.poster;
    document.querySelectorAll('.sidebar p')[0].textContent = `Ngày chiếu: ${showDate}`;
    document.querySelectorAll('.sidebar p')[1].textContent = `Suất chiếu: ${showTime}`;
    document.title = `Đặt vé: ${movie.title}`;
  }

  showMovieInfo();

  seatMap.addEventListener('click', event => {
    // Dùng listener chung cho sơ đồ ghế; khóa thao tác trong lúc thanh toán/lưu dữ liệu.
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
    // Kiểm tra lần cuối các ghế còn trống trước khi mở thông tin thanh toán.
    syncBookedSeats();
    if (!storageAvailable || !selectedSeats.size) return;

    checkoutId = createCheckoutId();
    getElement('qrImage').src = './assets/img/qr.png';
    showSelectedSeats();
  });

  getElement('closePay').addEventListener('click', () => {
    // Chỉ cho đóng hộp thanh toán khi chưa gửi yêu cầu lưu đơn.
    if (!isSaving) closePayment();
  });

  confirmButton.addEventListener('click', async () => {
    // Chặn bấm lặp và xác nhận đủ dữ liệu trước khi ghi thanh toán.
    if (isSaving || !checkoutId || !selectedSeats.size || paymentOverlay.classList.contains('hidden')) return;

    isSaving = true;
    confirmButton.disabled = true;
    updateSummary();

    try {
      // Chuyển danh sách ghế đã chọn thành dữ liệu đơn hàng gồm mã và giá.
      const orderSeats = seats
        .filter(seat => selectedSeats.has(seat.dataset.id))
        .map(seat => ({ id: seat.dataset.id, price: priceOf(seat) }));

      const order = await CinemaStore.recordPayment({
        // CinemaStore kiểm tra trùng ghế rồi lưu giao dịch vào localStorage.
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
      // Hiện lỗi lưu đơn cho người dùng và đóng hộp thanh toán.
      alert(error.message);
      closePayment();
    } finally {
      // Dù thành công hay thất bại, mở khóa nút và đồng bộ lại sơ đồ ghế.
      isSaving = false;
      confirmButton.disabled = false;
      syncBookedSeats();
    }
  });

  window.addEventListener('storage', event => {
    // Nếu tab khác cập nhật đơn hàng, tải lại trạng thái ghế để tránh đặt trùng.
    if (event.key !== CinemaStore.KEYS.orders && event.key !== null) return;

    if (!isSaving) {
      closePayment();
      syncBookedSeats();
    }
  });

  syncBookedSeats();
});
