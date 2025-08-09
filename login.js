// login.js
document.getElementById('formLogin').addEventListener('submit', e => {
  e.preventDefault();
  const user = e.target.user.value;
  const pass = e.target.pass.value;
  const akun = JSON.parse(localStorage.getItem(user));
  if (akun && akun.pass === pass) {
    localStorage.setItem('userAktif', user);
    location.href = 'profil.html';
  } else {
    alert('Username / password salah');
  }
});