let toggle = document.querySelector('.country-filter__toggle');
let alphabet = document.querySelector('.alphabet');
let list = document.querySelector('.country-filter__large-screen');
let areas = document.querySelector('.country-filter__area-list');
let bigButton = document.querySelector('.country-filter__unwrap');
let text = document.querySelector('.country-filter__toggle-text');
let sign = document.querySelector('.country-filter__toggle-sign');
let body = document.querySelector('.page__body');
let wrapper = document.querySelector('.country-filter__wrapper');

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
  bigButton.classList.toggle('country-filter__unwrap--hidden');
  wrapper.classList.toggle('country-filter__wrapper--unwrapped');
});

bigButton.addEventListener('click', function (evt) {
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
  bigButton.classList.toggle('country-filter__unwrap--hidden');
});



let container = document.querySelectorAll('.country-filter__letter-group--active .country-filter__letter-link');
let locations = document.querySelector('.area-list');

locations.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (event.target.tagName !== 'A') return false;

  let filterClass = event.target.dataset['area'];

  container.forEach(elem => {
    elem.classList.remove('country-filter__letter-link--hide');

    if (!elem.classList.contains(filterClass)) {
      elem.classList.add('country-filter__letter-link--hide');
    }
  });
});
