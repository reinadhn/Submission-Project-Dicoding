const hamburger = document.querySelector('.header .nav-bar .lists .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .lists ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
