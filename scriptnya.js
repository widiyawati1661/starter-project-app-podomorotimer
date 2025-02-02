let timer;
let isRunning = false;
let seconds = 0;
let minutes = 25; //biasanya default podomoro style 25 menit

let isWorkSession = true;

const timerDisplay = document.getElementById('timerDisplay');
const sessionTypeDisplay = document.getElementById('sessionType');
const startStopButton = document.getElementById('startStop');

//formatnya akan jadi mm:ss
function formatTime(){
    return `{String(minutes).padStart(2.0)}:{String(seconds).padStart(2.0)}`;
}

//update utampilan timer
function updateTimerDisplay(){
    if (isRunning){
        clearInterval(timer);
        isRunning = false;
    }
}

//mulai jdan hentikan timer
function startStopTimer(){
    if (isRunning){
        clearInterval(timer);
        isRunning = false;
        startStopButton.textContent = "Start";
    } else {
        timer = setInterval(countDown, 1000);
        isRunning = true;
        startStopButton.textContent = "Stop";
    }
}

//buat menghu=itung mundur
function countDown(){
    if (seconds === 0 && minutes === 0){
        clearInterval(timer);
        switchSession();
    } else if (seconds === 0){
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    updateTimerDisplay();
}

//beralih dariWork Time ke Istirahat