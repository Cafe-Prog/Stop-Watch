const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
console.log(stopButton)
const resetButton = document.querySelector('.reset');

const minuteCounter = document.querySelector('.minute');
const secondCounter = document.querySelector('.second');
const tensCounter = document.querySelector('.tens');

let minute = 0;
let second = 0;
let tens = 0;

let interval;

function start() {
    tens++
    if (tens < 10) {
        tensCounter.innerHTML = `0${tens}`;
    } else if (tens > 10) {
        tensCounter.innerHTML = tens;
    } if (tens == 60) {
        tens = 0;
        tensCounter.innerHTML = tens;
        second++;

    } if (second >= 10) {
        secondCounter.innerHTML = second;
    } else {
        secondCounter.innerHTML = `0${second}`;
    } if (second == 60) {
        second = 0;
        secondCounter.innerHTML = second;
        minute++;
        if (minute >= 10) {
            minuteCounter.innerHTML = minute;
        } else {
            minuteCounter.innerHTML = `0${minute}`;
        }
    };
};

startButton.addEventListener('click', () => {
    interval = setInterval(start, 10);
})

stopButton.addEventListener('click', () => {
    clearInterval(interval);
});

resetButton.addEventListener('click', () => {
    tens = 0;
    second = 0;
    minute = 0;

    tensCounter.innerHTML = `0${tens}`;
    secondCounter.innerHTML = `0${second}`;
    minuteCounter.innerHTML = `0${minute}`;
});