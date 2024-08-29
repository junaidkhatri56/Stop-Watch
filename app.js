let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;

function updateDisplay() {
    if (hours < 10) {
        document.querySelector('#hours').innerHTML = '0' + hours;
    } else {
        document.querySelector('#hours').innerHTML = hours;
    }
    
    if (minutes < 10) {
        document.querySelector('#minuts').innerHTML = '0' + minutes;
    } else {
        document.querySelector('#minuts').innerHTML = minutes;
    }
    
    if (seconds < 10) {
        document.querySelector('#seconds').innerHTML = '0' + seconds;
    } else {
        document.querySelector('#seconds').innerHTML = seconds;
    }
    
}

function start() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
}

function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}
