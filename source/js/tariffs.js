var tariffs = document.querySelector('.business-rates');
var showButton = document.querySelector('.tariffs__open');
var closeButton = document.querySelector('.business-rates__close');

showButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  tariffs.classList.toggle('business-rates--opened');
});
closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  tariffs.classList.toggle('business-rates--opened');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (tariffs.classList.contains('business-rates--opened')) {
      evt.preventDefault();
      tariffs.classList.remove('business-rates--opened');
    }
  }
});
