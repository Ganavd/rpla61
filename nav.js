// nav.js — dipanggil di setiap halaman
const user = localStorage.getItem('userAktif');
const nav = document.querySelector('nav');

function renderMenu() {
  if (user) {
    nav.innerHTML = `
      <a href="index.html">Beranda</a>
      <a href="profil.html">Profil</a>
      <a href="tugas.html">Tugas</a>
      <a href="info.html">Info</a>
      <a href="galeri.html">Galeri</a>
      <button onclick="logout()">Keluar</button>
    `;
  } else {
    nav.innerHTML = `
      <a href="index.html">Beranda</a>
      <a href="login.html">Masuk/Daftar</a>
      <a href="galeri.html">Galeri</a>
    `;
  }
}
renderMenu();