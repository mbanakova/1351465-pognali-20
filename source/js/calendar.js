var date = new Date();

var renderCalendar = function () {
  date.setDate(1);

  var monthDays = document.querySelector('.calendar__days');

  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  var prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  var firstDayIndex = date.getDay() - 1;

  var lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() - 1;

  var nextDays = 7 - lastDayIndex - 1;

  var months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];

  document.querySelector('.js-month').textContent = months[date.getMonth()];
  document.querySelector('.js-year').textContent = date.getFullYear();

  let days = '';

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="calendar__prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {

    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="calendar__today">${i}<div class="calendar__arrival">Заезд</div></div>`;
    } else {
      days += `<div class="calendar__date">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="calendar__next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  let firstOfNext = document.querySelector('.calendar__next-date');
  let firstOfCurrent = document.querySelector('.calendar__date');
  let currentMonthName = months[date.getMonth()].substring(0, 3);
  let nextMonthName = months[date.getMonth() + 1].substring(0, 3);

  firstOfCurrent.innerHTML += `<div class="calendar__first-day">${currentMonthName}</div>`;
  firstOfNext.innerHTML += `<div class="calendar__first-day">${nextMonthName}</div>`;

}

document.querySelector('.calendar__previous').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
})

document.querySelector('.calendar__next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
})

renderCalendar();


document.getElementById('start-date').value = +document.querySelector('.calendar__today').textContent + ' ' + document.querySelector('.js-month').textContent;


let picks = document.querySelectorAll('.calendar__date, .calendar__today, .calendar__next-date').forEach(pick => {
  pick.addEventListener('click', () => {

    pick.classList.toggle('calendar__picked-date');
    document.getElementById('end-date').value = pick.textContent + ' ' + document.querySelector('.js-month').textContent;
    pick.innerHTML += `<div class="calendar__arrival">Выезд</div>`;
  });
});
