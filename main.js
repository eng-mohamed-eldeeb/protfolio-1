const menuList = document.querySelector('.mop_menu');
const menuIcon = document.querySelector('#menuIcon');
const xIcone = document.querySelector('#xIcon');
const body = document.body;
let option = document.querySelectorAll('.listOption');

option = Array.from(option);

menuIcon.addEventListener('click', () => {
    menuList.classList.remove('menu-hidden');
    menuList.classList.add('menu-visible');
    body.classList.toggle('no-scroll');

});


xIcone.addEventListener('click', () => {
    menuList.classList.add('menu-hidden');
    menuList.classList.remove('menu-visible');
    body.classList.toggle('no-scroll');
});

option.forEach(item => {
    item.addEventListener('click', () => {
      //handle click
    menuList.classList.add('menu-hidden');
    menuList.classList.remove('menu-visible');
    body.classList.toggle('no-scroll');
    })
});