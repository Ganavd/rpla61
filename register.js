// register.js
document.getElementById('formReg').addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  localStorage.setItem(data.user, JSON.stringify(data));
  alert('Akun berhasil dibuat! Silakan login.');
  location.href = 'login.html';
});