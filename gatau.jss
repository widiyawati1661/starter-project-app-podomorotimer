let timer;
let isRunning = false;
let seconds = 0;
let minutes = 25; // Pomodoro default work time
let isWorkSession = true;

const timerDisplay = document.getElementById('timerDisplay');
const sessionTypeDisplay = document.getElementById('sessionType');
const startStopButton = document.getElementById('startStop');

// Format waktu menjadi MM:SS
function formatTime() {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Update tampilan timer
function updateTimerDisplay() {
  timerDisplay.textContent = formatTime();
}

// Mulai atau hentikan timer
function startStopTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    startStopButton.textContent = "Start";
  } else {
    timer = setInterval(countDown, 1000);
    isRunning = true;
    startStopButton.textContent = "Stop";
  }
}

// Fungsi untuk menghitung mundur
function countDown() {
  if (seconds === 0 && minutes === 0) {
    clearInterval(timer);
    switchSession();
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateTimerDisplay();
}

// Beralih antara sesi kerja dan istirahat
function switchSession() {
  if (isWorkSession) {
    // Setelah sesi kerja selesai, mulai istirahat
    minutes = 5; // Waktu istirahat 5 menit
    sessionTypeDisplay.textContent = "Break Time";
  } else {
    // Setelah sesi istirahat selesai, mulai sesi kerja
    minutes = 25; // Waktu kerja 25 menit
    sessionTypeDisplay.textContent = "Work Time";
  }

  // Ubah ke sesi yang lain
  isWorkSession = !isWorkSession;
  startStopButton.textContent = "Start";
  isRunning = false;
}

// Reset timer
function resetTimer() {
  clearInterval(timer);
  minutes = 25; // Reset ke waktu kerja 25 menit
  seconds = 0;
  updateTimerDisplay();
  sessionTypeDisplay.textContent = "Work Time";
  startStopButton.textContent = "Start";
  isRunning = false;
}
