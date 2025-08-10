document.getElementById('formLogin').addEventListener('submit', e => {
  e.preventDefault();
  const user = e.target.user.value;
  const pass = e.target.pass.value;
  const akun = JSON.parse(localStorage.getItem(user));
  if (akun && akun.pass === pass) {
    localStorage.setItem('userAktif', user);
    showToast('Berhasil masuk!');
    setTimeout(()=> location.href='index.html', 1000);
  } else {
    showToast('Username / password salah');
  }
});
function showToast(msg){
  const t=document.createElement('div');t.className='custom-toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),3000);
}