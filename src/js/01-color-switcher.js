function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;
stop.setAttribute("disabled", "disabled");

start.addEventListener('click', () => {
    timerId = setInterval(() => {
        start.setAttribute("disabled", "disabled");
        stop.removeAttribute("disabled");
        const colorSet = getRandomHexColor();
        bodyEl.style.background = colorSet;
    },1000);
});

stop.addEventListener('click', () => {
    clearInterval(timerId);
    start.removeAttribute("disabled");
    stop.setAttribute("disabled", "disabled");
})