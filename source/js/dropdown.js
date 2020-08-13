let toggle = document.querySelector('.step__dropdown-list');
let box = document.querySelector('.step__alphabet');
let chooseButton = document.querySelector('.step__dropdown-select');

toggle.addEventListener('click', function (evt) {
  evt.preventDefault();

  chooseButton.classList.toggle('step__dropdown-select--active');
  toggle.classList.toggle('step__dropdown-list--active');
  box.classList.toggle('step__alphabet--active');
});
