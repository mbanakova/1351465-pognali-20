let matesCounter = document.getElementById('mates');
let minusMates = document.querySelector('.fieldset-number__less--mates');
let mates = matesCounter.value;


minusMates.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (mates > 0 && mates <= 10) {
    plusMates.disabled = false;
    mates--;
    matesCounter.value = mates;
  }
  else {
    minusMates.disabled = true;
  }
});


let plusMates = document.querySelector('.fieldset-number__more--mates');


plusMates.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (mates >= 0 && mates < 10) {
    minusMates.disabled = false;
    mates++;
    matesCounter.value = mates;
  }
  else {
    plusMates.disabled = true;
  }
});



let daysCounter = document.getElementById('days');
let minusDays = document.querySelector('.fieldset-number__less--days');
let days = daysCounter.value;


minusDays.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (days > 0 && days <= 60) {
    plusDays.disabled = false;
    days--;
    daysCounter.value = days;
  }
  else {
    minusDays.disabled = true;
  }
});


let plusDays = document.querySelector('.fieldset-number__more--days');


plusDays.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (days >= 0 && days < 10) {
    minusDays.disabled = false;
    days++;
    daysCounter.value = days;
  }
  else {
    plusDays.disabled = true;
  }
});
