// nav.js
document.addEventListener('DOMContentLoaded', () => {
  const user = localStorage.getItem('userAktif');
  const nav = document.querySelector('nav');

  if (user) {
    nav.innerHTML = `
      <a href="index.html">Beranda</a>
      <a href="profil.html">Profil</a>
      <a href="tugas.html">Tugas</a>
      <a href="galeri.html">Galeri</a>
      <a href="info.html">Info</a>
      <button onclick="logout()">Keluar</button>
    `;
  } else {
    nav.innerHTML = `
      <a href="index.html">Beranda</a>
      <a href="login.html">Masuk/Daftar</a>
      <a href="galeri.html">Galeri</a>
    `;
  }
});

function logout() {
  localStorage.removeItem('userAktif');
  location.href = 'index.html';
}