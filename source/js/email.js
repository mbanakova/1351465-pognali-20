var emailInput = document.querySelector('.form__index-input');
var emailSubmit = document.querySelector('.form__auth-submit');
var emailForm = document.querySelector('.form__index-form');
emailForm.addEventListener('submit', function (evt) {
  if (!emailInput.value) {
    evt.preventDefault();
    emailInput.classList.add('form__index-input--error');
    emailInput.placeholder = 'Введите e-mail';
  }
});
