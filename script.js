const toggleMenu = document.querySelector('.toggle-bar');
const menuOpen = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-2');



menuOpen.addEventListener('click', ()=> {
  toggleMenu.classList.add('top-0')
  menuClose.classList.remove('hidden')
  menuOpen.classList.add('hidden');
})

menuClose.addEventListener('click', ()=> {
  toggleMenu.classList.remove('top-0')
  menuClose.classList.add('hidden');
  menuOpen.classList.remove('hidden')
})





