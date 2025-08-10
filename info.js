// info.js
const info = JSON.parse(localStorage.getItem('info')) || [];

renderInfo();

document.getElementById('formInfo').addEventListener('submit', e => {
  e.preventDefault();
  const judul = e.target[0].value;
  const isi = e.target[1].value;
  const tanggal = new Date().toLocaleDateString('id-ID');
  info.unshift({ judul, isi, tanggal });
  localStorage.setItem('info', JSON.stringify(info));
  renderInfo();
  e.target.reset();
});

function renderInfo() {
  const html = info.map(i => `
    <article class="card">
      <h3>${i.judul}</h3>
      <p>${i.isi}</p>
      <small>${i.tanggal}</small>
    </article>
  `).join('');
  document.getElementById('listInfo').innerHTML = html;
}