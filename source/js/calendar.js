const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector('.calendar__days');

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const firstDayIndex = date.getDay() - 1;

  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() - 1;

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
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
      days += `<div class="calendar__today" style="background-color:#1d2e5b;color:#ffffff;">${i}</div>`;
    } else {
      days += `<div class="calendar__date">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="calendar__next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
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

// 34 июля :D
document.getElementById('end-date').value = +document.querySelector('.calendar__today').textContent + 3 + ' ' + document.querySelector('.js-month').textContent;
