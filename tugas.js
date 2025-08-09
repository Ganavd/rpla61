// tugas.js
const user = localStorage.getItem('userAktif');
if (!user) location.href = 'login.html';

// Contoh tugas default
const tugasList = JSON.parse(localStorage.getItem('tugas')) || [
  { mapel: 'Sejarah', judul: 'Alasan Jepang Menjajah', deadline: '2025-08-15' },
  { mapel: 'Matematika', judul: 'Soal Limit', deadline: '2025-08-12' }
];

renderTugas();

function renderTugas() {
  const html = tugasList.map((t, i) => `
    <section class="card">
      <h3>${t.mapel} – ${t.judul}</h3>
      <p>Deadline: ${t.deadline}</p>
      <input type="file" onchange="uploadFile(${i}, this.files[0])">
      <p id="file-${i}">${t.file ? '✅ Sudah dikumpul' : '⏳ Belum dikumpul'}</p>
    </section>
  `).join('');
  document.getElementById('tugasMain').innerHTML = html;
}

function uploadFile(index, file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    tugasList[index].file = { name: file.name, data: e.target.result };
    localStorage.setItem('tugas', JSON.stringify(tugasList));
    renderTugas();
    alert('Tugas ter-upload!');
  };
  reader.readAsDataURL(file);
}