const menuButton = document.querySelector('.main-nav__menu-button');
const menu = document.querySelector('.main-nav__nav-list');

// Мобильное меню
menuButton.onclick = () => {
  menu.classList.toggle('main-nav__nav-list--open');
}
