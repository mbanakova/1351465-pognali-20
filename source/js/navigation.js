let burger = document.querySelector('.main-nav__burger');
let header = document.querySelector('.header');
let auth = document.querySelector('.main-nav__auth');
let nav = document.querySelector('.main-nav');
let pages = document.querySelector('.main-nav__list.site-list');
let links = document.querySelector('.main-nav__list.user-list');
let socials = document.querySelector('.main-nav__list.social');
let logoWhite = document.querySelector('.logo__white');
let logoBlue = document.querySelector('.logo__blue');

header.classList.remove('header--no-js');


burger.addEventListener('click', function (evt) {
  evt.preventDefault();
  nav.classList.toggle('main-nav--opened');  // ссылки на страницы
  auth.classList.toggle('main-nav__auth--opened');  // ссылки на страницы
  pages.classList.toggle('main-nav__list--opened');  // ссылки на страницы
  links.classList.toggle('main-nav__list--opened');  // ссылки на страницы
  socials.classList.toggle('social--opened');  // ссылки на страницы



  burger.classList.toggle('main-nav__burger--opened');  // бургер анимация
  header.classList.toggle('header--no-js');  // цвет шапки синий/белый

  if (!header.classList.contains('header--sticky')) {
    logoWhite.classList.toggle('logo__white--hidden');  // смена логотипа на другой цвет
    logoBlue.classList.toggle('logo__blue--hidden');  // смена логотипа на другой цвет
  }
});
