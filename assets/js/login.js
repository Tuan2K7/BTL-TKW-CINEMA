/* NOTE ADMIN 02: Giữ nguyên popup đăng nhập/đăng ký; dùng chung cho Admin và User. */
(() => {
  const $ = s => document.querySelector(s);
  const login = $('.js-login'), register = $('.js-register');
  const loginBtn = $('.js-login-btn'), registerBtn = $('.js-register-btn');
  const open = el => el?.classList.add('open');
  const close = el => el?.classList.remove('open');
  loginBtn?.addEventListener('click', () => open(login));
  registerBtn?.addEventListener('click', () => open(register));
  $('.js-login-close')?.addEventListener('click', () => close(login));
  $('.js-register-close')?.addEventListener('click', () => close(register));
  [login,register].forEach(el => el?.addEventListener('click', e => { if(e.target === el) close(el); }));
  $('.js-login .trybtn')?.addEventListener('click', e => { e.preventDefault(); close(login); open(register); });
  $('.js-register .trybtn')?.addEventListener('click', e => { e.preventDefault(); close(register); open(login); });
  $('.js-login-out')?.addEventListener('click', () => CinemaStore.logout());
  const value = id => document.getElementById(id)?.value.trim() || '';
  function loginSubmit() {
    try {
      if (!value('email1') || !value('password1')) throw new Error('Vui lòng nhập email và mật khẩu.');
      CinemaStore.login(value('email1'), document.getElementById('password1').value);
      close(login); document.getElementById('password1').value = '';
    } catch(e) { alert(e.message); }
  }
  function registerSubmit() {
    try {
      const data = Object.fromEntries(['surname','name','accountName','number'].map(k => [k,value(k)]));
      data.email = value('email2'); data.password = document.getElementById('password2').value;
      if (Object.values(data).some(v => !v)) throw new Error('Vui lòng điền đầy đủ thông tin.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) throw new Error('Email không hợp lệ.');
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.password)) throw new Error('Mật khẩu cần ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự @$!%*?&.');
      if (!/^\+?[\d\s().-]{9,16}$/.test(data.number)) throw new Error('Số điện thoại không hợp lệ.');
      if (data.password !== document.getElementById('confirmPassword').value) throw new Error('Mật khẩu xác nhận không khớp.');
      CinemaStore.register(data);
      close(register); open(login); document.getElementById('email1').value = data.email;
      ['password2','confirmPassword'].forEach(k => document.getElementById(k).value = '');
      alert('Đăng ký thành công. Bạn có thể đăng nhập.');
    } catch(e) { alert(e.message); }
  }
  $('.js-login-container .js-login-btn')?.addEventListener('click',loginSubmit);
  $('.js-register-container .js-register-btn')?.addEventListener('click',registerSubmit);
  login?.addEventListener('keydown', e => { if(e.key === 'Enter') {e.preventDefault();loginSubmit();} });
  register?.addEventListener('keydown', e => { if(e.key === 'Enter') {e.preventDefault();registerSubmit();} });
  function updateUI() {
    const user = CinemaStore.currentUser();
    loginBtn?.classList.toggle('remove',!!user); registerBtn?.classList.toggle('remove',!!user);
    $('.login-user')?.classList.toggle('open',!!user);
    if ($('.login-name')) $('.login-name').textContent = user ? `Hello ${user.accountName}` : '';
  }
  window.addEventListener('cinema:auth',updateUI);updateUI();
})();
