var toggle1 = document.querySelector('.country-filter__toggle');
var alphabet = document.querySelector('.alphabet');
var list = document.querySelector('.country-filter__large-screen');
var areas = document.querySelector('.country-filter__area-list');
var bigButton = document.querySelector('.country-filter__unwrap');
var text = document.querySelector('.country-filter__toggle-text');
var sign = document.querySelector('.country-filter__toggle-sign');
var body = document.querySelector('.page');
var wrapper = document.querySelector('.country-filter__wrapper');
toggle1.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (text.textContent == 'Показать все') {
    text.textContent = 'Свернуть';
  } else {
    text.textContent = 'Показать все';
  }

  ;

  if (sign.textContent == '\u2022\u2022\u2022') {
    sign.textContent = '\u2716';
  } else {
    sign.textContent = '\u2022\u2022\u2022';
  }

  ;

  if (body.scrollWidth <= 750) {
    areas.classList.toggle('country-filter__area-list--hidden');
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
  }

  ;

  if (sign.textContent == '\u2022\u2022\u2022') {
    sign.textContent = '\u2716';
  } else {
    sign.textContent = '\u2022\u2022\u2022';
  }

  ;

  if (body.scrollWidth <= 750) {
    areas.classList.toggle('country-filter__area-list--hidden');
  }

  alphabet.classList.toggle('alphabet--hidden');
  list.classList.toggle('country-filter__large-screen--hidden');
  bigButton.classList.toggle('country-filter__unwrap--hidden');
});
var container = document.querySelectorAll('.country-filter__letter-group--active .country-filter__letter-link');
var locations = document.querySelector('.area-list');
locations.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (event.target.tagName !== 'A') return false;
  var filterClass = event.target.dataset['area'];
  container.forEach(function (elem) {
    elem.classList.remove('country-filter__letter-link--hide');

    if (!elem.classList.contains(filterClass)) {
      elem.classList.add('country-filter__letter-link--hide');
    }
  });
  var areaLink = document.querySelectorAll('.area-list__link');

  for (var i = 0; i < areaLink.length; i++) {
    areaLink[i].addEventListener('click', function () {
      for (var k = 0; k < areaLink.length; k++) {
        areaLink[k].classList.remove('area-list__link--active');
      }

      this.classList.add('area-list__link--active');
    });
  }
});
