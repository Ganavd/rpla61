// profil.js
const user = localStorage.getItem('userAktif');
if (!user) {
  location.href = 'login.html';
} else {
  const akun = JSON.parse(localStorage.getItem(user));
  document.getElementById('profilMain').innerHTML = `
    <section class="card">
      <img src="${akun.foto || 'https://via.placeholder.com/150'}" alt="Foto" width="150">
      <h2>${user}</h2>
      <p>${akun.bio || 'Belum ada bio.'}</p>
    </section>
    <button onclick="logout()">Keluar</button>
  `;
}

function logout() {
  localStorage.removeItem('userAktif');
  location.href = 'index.html';
}