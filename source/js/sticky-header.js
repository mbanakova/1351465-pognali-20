let whole = document.querySelector('.header');
let inner = document.querySelector('.main-nav');
let button = document.querySelector('.main-nav__burger');
let blue = document.querySelector('.logo__blue');
let white = document.querySelector('.logo__white');
let anchors = document.querySelector('.site-list');

window.onscroll = function () {
  if (window.pageYOffset > 580) {
    whole.classList.add('header--sticky');
    inner.classList.add('main-nav--sticky');
    button.classList.add('main-nav__burger--sticky');
    blue.classList.remove('logo__blue--hidden');
    white.classList.add('logo__white--hidden');
    anchors.classList.add('site-list--sticky');
  } else {
    whole.classList.remove('header--sticky');
    inner.classList.remove('main-nav--sticky');
    button.classList.remove('main-nav__burger--sticky');
    blue.classList.add('logo__blue--hidden');
    white.classList.remove('logo__white--hidden');
    anchors.classList.remove('site-list--sticky');
  }
};
