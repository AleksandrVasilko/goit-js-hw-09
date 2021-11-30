import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
formForInputValues: document.querySelector('.form'),
inputValueOfFirstDelay: document.querySelector('[name="delay"]'),
inputValueOfDelayStep: document.querySelector('[name="step"]'),
inputValueOfAmount: document.querySelector('[name="amount"]'),
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay })
      } else {
        reject({ position, delay })
        // Reject
      }
      }, delay);
    });
}
 

const generatePromis = () => {
  const refpromis = {
    delay: Number(refs.inputValueOfFirstDelay.value),
    delayStep: Number(refs.inputValueOfDelayStep.value),
    amount: Number(refs.inputValueOfAmount.value),
  }
    for (let i = 1; i <= refpromis.amount; i += 1) {
      createPromise(i, refpromis.delay)
        .then(({ position, delay }) => {
          Notify.success(
                `Fulfilled promise ${position} in ${delay}ms`,
                {
                  timeout: 5000,
                },
          );
        })
        .catch(({ position, delay }) => {
            Notify.failure(
                `Rejected promise ${position} in ${delay}ms`,
                {
                  timeout: 5000,
                },
          );
        });
      refpromis.delay += refpromis.delayStep;
    }
}



const submitForm = (e) => {
  e.preventDefault();
  generatePromis()
  e.currentTarget.reset()
}


refs.formForInputValues.addEventListener('submit', submitForm)