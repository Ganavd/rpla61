// register.js
document.getElementById('formReg').addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const kode = data.kode.toUpperCase();

  // cek whitelist
  if (!cekKode(kode)) {
    alert('Kode tidak valid atau sudah dipakai');
    return;
  }

  // tandai kode sudah dipakai
  tandaiKode(kode);

  // simpan data user
  localStorage.setItem(data.user, JSON.stringify(data));

  alert('Akun berhasil dibuat! Silakan login.');
  location.href = 'login.html';
});