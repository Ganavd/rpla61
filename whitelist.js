// whitelist.js — 36 kode absen
const whitelist = [
  'BAGUS-19',   // kamu
  'LOIS-24',
  // ... sampai MURID-36
];

// fungsi cek kode
function cekKode(kode) {
  return whitelist.includes(kode.toUpperCase()) && !localStorage.getItem(`kode_${kode}`);
}

// tandai kode sudah dipakai
function tandaiKode(kode) {
  localStorage.setItem(`kode_${kode}`, 'dipakai');
}
