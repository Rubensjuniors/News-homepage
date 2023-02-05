const btnMobile = document.querySelector('#btn-mobile');
const header = document.querySelector('#header');

btnMobile.addEventListener('click', ()=>{
  header.classList.toggle('active');
});


