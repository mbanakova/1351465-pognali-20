let toggle = document.querySelector('.country-filter__toggle');
let alphabet = document.querySelector('.alphabet');
let list = document.querySelector('.country-filter__large-screen');
let areas = document.querySelector('.country-filter__area-list');
let button = document.querySelector('.country-filter__unwrap');
let text = document.querySelector('.country-filter__toggle-text');
let sign = document.querySelector('.country-filter__toggle-sign');
let body = document.querySelector('.page__body');

toggle.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (text.textContent == 'Показать все') {
    text.textContent = 'Свернуть';
  } else {
    text.textContent = 'Показать все';
  };

  if (sign.textContent == '\u2022\u2022\u2022') {
    sign.textContent = '\u2716';
  } else {
    sign.textContent = '\u2022\u2022\u2022';
  };

  if (body.scrollWidth <= 750) {
    areas.classList.toggle('country-filter__area-list--hidden')
  }

  alphabet.classList.toggle('alphabet--hidden');
  list.classList.toggle('country-filter__large-screen--hidden');
  button.classList.toggle('country-filter__unwrap--hidden');
});

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (text.textContent == 'Показать все') {
    text.textContent = 'Свернуть';
  } else {
    text.textContent = 'Показать все';
  };

  if (sign.textContent == '\u2022\u2022\u2022') {
    sign.textContent = '\u2716';
  } else {
    sign.textContent = '\u2022\u2022\u2022';
  };

  if (body.scrollWidth <= 750) {
    areas.classList.toggle('country-filter__area-list--hidden')
  }

  alphabet.classList.toggle('alphabet--hidden');
  list.classList.toggle('country-filter__large-screen--hidden');
  button.classList.toggle('country-filter__unwrap--hidden');
});
