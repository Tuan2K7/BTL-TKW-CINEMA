document.addEventListener('DOMContentLoaded', function () {
  // Lấy popup, nút điều khiển và các ô mật khẩu một lần để tái sử dụng bên dưới.
  const loginPopup = document.querySelector('.js-login');
  const registerPopup = document.querySelector('.js-register');
  const loginButton = document.querySelector('.nav-layout .js-login-btn');
  const registerButton = document.querySelector('.nav-layout .js-register-btn');
  const loginPassword = document.getElementById('password1');
  const registerPassword = document.getElementById('password2');
  const confirmPassword = document.getElementById('confirmPassword');

  function open(popup) {
    // Thêm class open để CSS hiển thị popup tương ứng.
    popup?.classList.add('open');
  }

  function close(popup) {
    // Bỏ class open để CSS ẩn popup.
    popup?.classList.remove('open');
  }

  function value(id) {
    // Lấy nội dung trường theo ID và bỏ khoảng trắng thừa ở đầu/cuối.
    return document.getElementById(id).value.trim();
  }

  function login() {
    // Đọc thông tin, kiểm tra cơ bản rồi nhờ CinemaStore xác thực tài khoản.
    try {
      const email = value('email1');
      if (!email || !loginPassword.value.trim()) {
        throw new Error('Vui lòng nhập email và mật khẩu.');
      }

      CinemaStore.login(email, loginPassword.value);
      close(loginPopup);
      loginPassword.value = '';
    } catch (error) {
      alert(error.message);
    }
  }

  function register() {
    // Gom giá trị biểu mẫu thành một đối tượng để kiểm tra và lưu tài khoản.
    try {
      const account = {
        surname: value('surname'),
        name: value('name'),
        accountName: value('accountName'),
        number: value('number'),
        email: value('email2'),
        password: registerPassword.value
      };

      if (Object.values(account).some(item => !item.trim())) {
        // Không cho gửi biểu mẫu nếu còn trường bắt buộc chưa điền.
        throw new Error('Vui lòng điền đầy đủ thông tin.');
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(account.email)) {
        // Kiểm tra email có phần tên, ký tự @ và phần miền.
        throw new Error('Email không hợp lệ.');
      }
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(account.password)) {
        // Mật khẩu cần ít nhất 8 ký tự và phải có chữ thường, chữ hoa, số, ký tự đặc biệt.
        throw new Error('Mật khẩu cần ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự @$!%*?&.');
      }
      if (!/^\+?[\d\s().-]{9,16}$/.test(account.number)) {
        // Chấp nhận số điện thoại có dấu +, khoảng trắng, ngoặc, chấm hoặc gạch ngang.
        throw new Error('Số điện thoại không hợp lệ.');
      }
      if (account.password !== confirmPassword.value) {
        // Hai ô mật khẩu phải giống nhau trước khi ghi tài khoản.
        throw new Error('Mật khẩu xác nhận không khớp.');
      }

      CinemaStore.register(account);
      // Sau khi đăng ký, đóng form hiện tại và mở form đăng nhập với email đã điền sẵn.
      close(registerPopup);
      open(loginPopup);
      document.getElementById('email1').value = account.email;
      registerPassword.value = '';
      confirmPassword.value = '';
      alert('Đăng ký thành công. Bạn có thể đăng nhập.');
    } catch (error) {
      alert(error.message);
    }
  }

  function updateAccount() {
    // Đồng bộ nút đăng nhập/đăng ký và tên tài khoản theo phiên hiện hành.
    const user = CinemaStore.currentUser();
    loginButton?.classList.toggle('remove', Boolean(user));
    registerButton?.classList.toggle('remove', Boolean(user));
    document.querySelector('.login-user')?.classList.toggle('open', Boolean(user));
    const name = document.querySelector('.login-name');
    if (name) name.textContent = user ? `Hello ${user.accountName}` : '';
  }

  // Cùng một class nút có thể mở popup hoặc gửi form tùy nút nằm trong khung nào.
  document.querySelectorAll('.js-login-btn').forEach(button => button.addEventListener('click', function (event) {
    if (event.currentTarget.closest('.js-login-container')) login();
    else open(loginPopup);
  }));
  // Đăng ký dùng cùng cách phân biệt nút mở popup và nút gửi thông tin.
  document.querySelectorAll('.js-register-btn').forEach(button => button.addEventListener('click', function (event) {
    if (event.currentTarget.closest('.js-register-container')) register();
    else open(registerPopup);
  }));
  document.querySelector('.js-login-close')?.addEventListener('click', () => close(loginPopup));
  document.querySelector('.js-register-close')?.addEventListener('click', () => close(registerPopup));
  // Nút đăng xuất xóa phiên trong CinemaStore.
  document.querySelector('.js-login-out')?.addEventListener('click', () => CinemaStore.logout());

  // Bấm phần nền bên ngoài khung form sẽ đóng popup, bấm bên trong thì giữ nguyên.
  loginPopup?.addEventListener('click', event => {
    if (event.target === loginPopup) close(loginPopup);
  });
  registerPopup?.addEventListener('click', event => {
    if (event.target === registerPopup) close(registerPopup);
  });
  // Chuyển qua lại giữa hai popup mà không tải lại trang.
  document.querySelector('.js-login .trybtn')?.addEventListener('click', event => {
    event.preventDefault();
    close(loginPopup);
    open(registerPopup);
  });
  document.querySelector('.js-register .trybtn')?.addEventListener('click', event => {
    event.preventDefault();
    close(registerPopup);
    open(loginPopup);
  });

  // Cho phép gửi form bằng Enter khi con trỏ đang ở trong popup tương ứng.
  loginPopup?.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      login();
    }
  });
  registerPopup?.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      register();
    }
  });

  // Cập nhật giao diện khi tab khác hoặc thao tác hiện tại thay đổi trạng thái đăng nhập.
  window.addEventListener('cinema:auth', updateAccount);
  updateAccount();
});
