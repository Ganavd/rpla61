document.getElementById('formReg').addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const kode = data.kode.toUpperCase();
  if (!cekKode(kode)) { showToast('Kode tidak valid / sudah dipakai'); return; }
  tandaiKode(kode);
  localStorage.setItem(data.user, JSON.stringify(data));
  showToast('Akun berhasil dibuat!'); 
  setTimeout(()=> location.href='login.html', 1000);
});