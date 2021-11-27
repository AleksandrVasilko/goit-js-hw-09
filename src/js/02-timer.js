import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
  },
};





flatpickr('#datetime-picker', options.enableTime);






function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


/*
Notiflix.Confirm.show(
  'Notiflix Confirm',
  'Do you agree with me?',
  'Yes',
  'No',
  function okCb() {
    alert('Thank you.');
  },
  function cancelCb() {
    alert('If you say so...');
  },
  {
    width: '320px',
    borderRadius: '8px',
    // etc...
  },
);
*/




// УДАЛИТЬ ПОСЛЕ ТЕСТИРОВКИ!!!
const date = new Date();

/* console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getYear());
console.log(date.getTime()); */

const date1 = Date.now();
/* setInterval(() => {
  const date2 = Date.now();

  console.log(date1);
  console.log(date2);

  console.log(date1 - date2);
}, 1000); */


