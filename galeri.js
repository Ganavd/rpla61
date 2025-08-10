// galeri.js
const galeri = JSON.parse(localStorage.getItem('galeri')) || [];
const user = localStorage.getItem('userAktif');
renderGaleri();

document.getElementById('formGaleri').addEventListener('submit', e => {
  e.preventDefault();
  if (!user) { alert('Silakan login untuk upload foto'); return; }

  const file = e.target[0].files[0];
  const caption = e.target[1].value;
  if (!file || !caption) return;

  const reader = new FileReader();
  reader.onload = e => {
    galeri.unshift({ src: e.target.result, caption, user });
    localStorage.setItem('galeri', JSON.stringify(galeri));
    renderGaleri();
    e.target.reset();
  };
  reader.readAsDataURL(file);
});

function renderGaleri() {
  const html = galeri.map(g => `
    <div class="item">
      <img src="${g.src}" alt="${g.caption}">
      <p>${g.caption} – <small>${g.user}</small></p>
    </div>
  `).join('');
  document.getElementById('gridGaleri').innerHTML = html;

  // tampilkan / sembunyikan form upload
  document.getElementById('formGaleri').style.display = user ? 'block' : 'none';
}