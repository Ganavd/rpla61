

document.getElementById('formRegister').addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const kode = data.kode.toUpperCase();
  if (!cekKode(kode)) {
    alert('Kode tidak valid atau sudah dipakai');
    return;
  }
  tandaiKode(kode);
  localStorage.setItem(data.user, JSON.stringify(data));
  alert('Akun berhasil dibuat!');
  closeModalBox();
});