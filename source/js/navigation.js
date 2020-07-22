let burger = document.querySelector('.main-nav__burger');
let nav = document.querySelector('.main-nav');
let navMenu = document.querySelector('.main-nav__wrapper');
let logoWhite = document.querySelector('.logo__white');
let logoBlue = document.querySelector('.logo__blue');

burger.addEventListener('click', function (evt) {
  evt.preventDefault();
  navMenu.classList.toggle('main-nav__wrapper--wrapped');
  burger.classList.toggle('main-nav__burger--opened');
  nav.classList.toggle('main-nav--unwrapped');
  logoWhite.classList.toggle('logo__white--hidden');
  logoBlue.classList.toggle('logo__blue--hidden');
});
