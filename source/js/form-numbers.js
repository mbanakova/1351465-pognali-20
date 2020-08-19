var matesCounter = document.getElementById('mates');
var minusMates = document.querySelector('.fieldset-number__less--mates');
var mates = matesCounter.value;
minusMates.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (mates > 0 && mates <= 10) {
    plusMates.disabled = false;
    mates--;
    matesCounter.value = mates;
  } else {
    minusMates.disabled = true;
  }
});
var plusMates = document.querySelector('.fieldset-number__more--mates');
plusMates.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (mates >= 0 && mates < 10) {
    minusMates.disabled = false;
    mates++;
    matesCounter.value = mates;
  } else {
    plusMates.disabled = true;
  }
});
var daysCounter = document.getElementById('days');
var minusDays = document.querySelector('.fieldset-number__less--days');
var days = daysCounter.value;
minusDays.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (days > 0 && days <= 60) {
    plusDays.disabled = false;
    days--;
    daysCounter.value = days;
  } else {
    minusDays.disabled = true;
  }
});
var plusDays = document.querySelector('.fieldset-number__more--days');
plusDays.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (days >= 0 && days < 10) {
    minusDays.disabled = false;
    days++;
    daysCounter.value = days;
  } else {
    plusDays.disabled = true;
  }
}); // Textarea invalid

var textareas = document.querySelectorAll('.step__plan-description');
var form = document.querySelector('.main__form');
form.addEventListener('submit', function (evt) {
  for (var i = 0; i < textareas.length; i++) {
    if (!textareas[i].value) {
      evt.preventDefault();
      textareas[i].classList.remove('step__error');
      this.offsetWidth = this.offsetWidth;
      textareas[i].classList.add('step__error');
      textareas[i].placeholder = 'Это поле должно быть заполнено';
    }
  }
});
