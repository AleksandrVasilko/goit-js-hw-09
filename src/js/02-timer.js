import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    numberOfDays: document.querySelector('[data-days]'),
    numberOfHours:document.querySelector('[data-hours]'),
    numberOfMinutes:document.querySelector('[data-minutes]'),
    numberOfSeconds:document.querySelector('[data-seconds]'),
    startBtn: document.querySelector('[data-start]'),
    selectedTime: null,
}
refs.startBtn.setAttribute('disabled', true)


const pad = value => {
  return String(value).padStart(2, '0');
}

const onClickStartBtn = () => {
  return refs.selectedTime - new Date().getTime()
}

let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0].getTime() < new Date().getTime()){
            Notify.failure(
                'Please choose a date in the future',
                {
                  timeout: 5000,
                },
              );
              refs.startBtn.setAttribute('disabled', true)
            return;
        }
      refs.selectedTime = selectedDates[0].getTime()
      console.log(refs.selectedTime)
        refs.startBtn.removeAttribute('disabled')
    },
  }


flatpickr("#datetime-picker", options)
  
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


  const theCountdownStarted = () => {
     timerId = setInterval(() => {
      const { days, hours, minutes, seconds } = convertMs(onClickStartBtn())
       updateTime({ days, hours, minutes, seconds })
       if (onClickStartBtn() <= 1000) {
         clearInterval(timerId);
         Notify.failure(
                'Time is up. Set new timer.',
                {
                  timeout: 5000,
                },
         );
         refs.startBtn.setAttribute('disabled', true);
    }
     }, 1000)
    
  }
  
   const updateTime = (({days, hours, minutes, seconds}) => {
    refs.numberOfDays.textContent = `${days}`;
    refs.numberOfHours.textContent = `${hours}`;
    refs.numberOfMinutes.textContent = `${minutes}`;
     refs.numberOfSeconds.textContent = `${seconds}`;
  })
  refs.startBtn.addEventListener('click', theCountdownStarted )
  