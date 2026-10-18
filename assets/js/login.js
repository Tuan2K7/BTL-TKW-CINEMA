document.addEventListener('DOMContentLoaded', function () {
  const loginPopup = document.querySelector('.js-login');
  const registerPopup = document.querySelector('.js-register');
  const loginButton = document.querySelector('.nav-layout .js-login-btn');
  const registerButton = document.querySelector('.nav-layout .js-register-btn');
  const loginPassword = document.getElementById('password1');
  const registerPassword = document.getElementById('password2');
  const confirmPassword = document.getElementById('confirmPassword');

  function open(popup) {
    popup?.classList.add('open');
  }

  function close(popup) {
    popup?.classList.remove('open');
  }

  function value(id) {
    return document.getElementById(id).value.trim();
  }

  function login() {
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
        throw new Error('Vui lòng điền đầy đủ thông tin.');
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(account.email)) {
        throw new Error('Email không hợp lệ.');
      }
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(account.password)) {
        throw new Error('Mật khẩu cần ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự @$!%*?&.');
      }
      if (!/^\+?[\d\s().-]{9,16}$/.test(account.number)) {
        throw new Error('Số điện thoại không hợp lệ.');
      }
      if (account.password !== confirmPassword.value) {
        throw new Error('Mật khẩu xác nhận không khớp.');
      }

      CinemaStore.register(account);
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
    const user = CinemaStore.currentUser();
    loginButton?.classList.toggle('remove', Boolean(user));
    registerButton?.classList.toggle('remove', Boolean(user));
    document.querySelector('.login-user')?.classList.toggle('open', Boolean(user));
    const name = document.querySelector('.login-name');
    if (name) name.textContent = user ? `Hello ${user.accountName}` : '';
  }

  document.querySelectorAll('.js-login-btn').forEach(button => button.addEventListener('click', function (event) {
    if (event.currentTarget.closest('.js-login-container')) login();
    else open(loginPopup);
  }));
  document.querySelectorAll('.js-register-btn').forEach(button => button.addEventListener('click', function (event) {
    if (event.currentTarget.closest('.js-register-container')) register();
    else open(registerPopup);
  }));
  document.querySelector('.js-login-close')?.addEventListener('click', () => close(loginPopup));
  document.querySelector('.js-register-close')?.addEventListener('click', () => close(registerPopup));
  document.querySelector('.js-login-out')?.addEventListener('click', () => CinemaStore.logout());

  loginPopup?.addEventListener('click', event => {
    if (event.target === loginPopup) close(loginPopup);
  });
  registerPopup?.addEventListener('click', event => {
    if (event.target === registerPopup) close(registerPopup);
  });
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

  window.addEventListener('cinema:auth', updateAccount);
  updateAccount();
});
