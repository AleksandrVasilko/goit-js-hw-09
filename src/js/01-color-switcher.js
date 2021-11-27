function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
    const colorSet = getRandomHexColor();
    bodyEl.style.background = colorSet;
};

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;
stop.setAttribute("disabled", "disabled");

start.addEventListener('click', () => {
    start.setAttribute("disabled", "disabled");
    stop.removeAttribute("disabled");
    changeColor();
    timerId = setInterval(() => {
        changeColor();
    },1000);
});

stop.addEventListener('click', () => {
    clearInterval(timerId);
    start.removeAttribute("disabled");
    stop.setAttribute("disabled", "disabled");
})