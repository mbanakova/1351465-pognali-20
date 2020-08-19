let toggle1 = document.querySelector('.country-filter__toggle');
let alphabet = document.querySelector('.alphabet');
let list = document.querySelector('.country-filter__large-screen');
let areas = document.querySelector('.country-filter__area-list');
let bigButton = document.querySelector('.country-filter__unwrap');
let text = document.querySelector('.country-filter__toggle-text');
let sign = document.querySelector('.country-filter__toggle-sign');
let body = document.querySelector('.page');
let wrapper = document.querySelector('.country-filter__wrapper');

toggle1.addEventListener('click', function (evt) {
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

  let areaLink = document.querySelectorAll('.area-list__link');

  for (let i = 0; i < areaLink.length; i++) {
    areaLink[i].addEventListener('click', function () {
      for (let k = 0; k < areaLink.length; k++) {
        areaLink[k].classList.remove('area-list__link--active');
      }
      this.classList.add('area-list__link--active');
    });
  }
})
