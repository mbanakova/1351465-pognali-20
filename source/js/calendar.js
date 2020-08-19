var date = new Date();

var renderCalendar = function renderCalendar() {
  date.setDate(1);
  var monthDays = document.querySelector('.calendar__days');
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  var prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  var firstDayIndex = date.getDay() - 1;
  var lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() - 1;
  var nextDays = 7 - lastDayIndex - 1;
  var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  document.querySelector('.js-month').textContent = months[date.getMonth()];
  document.querySelector('.js-year').textContent = date.getFullYear();
  var days = '';

  for (var x = firstDayIndex; x > 0; x--) {
    days += '<div class=\'calendar__prev-date\'>'.concat(prevLastDay - x + 1, '</div>');
  }

  for (var i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += '<div class=\'calendar__today\'>'.concat(i, '<div class=\'calendar__arrival\'>\u0417\u0430\u0435\u0437\u0434</div></div>');
    } else {
      days += '<div class=\'calendar__date\'>'.concat(i, '</div>');
    }
  }

  for (var j = 1; j <= nextDays; j++) {
    days += '<div class=\'calendar__next-date\'>'.concat(j, '</div>');
    monthDays.innerHTML = days;
  }

  var firstOfNext = document.querySelector('.calendar__next-date');
  var firstOfCurrent = document.querySelector('.calendar__date');
  var currentMonthName = months[date.getMonth()].substring(0, 3);
  var nextMonthName = months[date.getMonth() + 1].substring(0, 3);
  firstOfCurrent.innerHTML += '<div class=\'calendar__first-day\'>'.concat(currentMonthName, '</div>');
  firstOfNext.innerHTML += '<div class=\'calendar__first-day\'>'.concat(nextMonthName, '</div>');
};

document.querySelector('.calendar__previous').addEventListener('click', function () {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
document.querySelector('.calendar__next').addEventListener('click', function () {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
renderCalendar();
document.getElementById('start-date').value = +document.querySelector('.calendar__today').textContent + ' ' + document.querySelector('.js-month').textContent;
var picks = document.querySelectorAll('.calendar__date, .calendar__today, .calendar__next-date').forEach(function (pick) {
  pick.addEventListener('click', function () {
    pick.classList.toggle('calendar__picked-date');
    document.getElementById('end-date').value = pick.textContent + ' ' + document.querySelector('.js-month').textContent;
    pick.innerHTML += '<div class=\'calendar__arrival\'>\u0412\u044B\u0435\u0437\u0434</div>';
  });
});
