let seconds = 0;
let minutes = 0;
let timerInterval = null;
let isPaused = false;

const timerElement = document.getElementById('timer');

// Start or resume timer
function startTimer() {
    if (timerInterval) return; // Prevent multiple intervals

    if (isPaused) {
        isPaused = false; // Reset paused state
    }

    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
}

// Pause timer
function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval); // Stop the interval
        timerInterval = null;
        isPaused = true; // Track paused state
    }
}

// Stop timer when finishing game
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isPaused = false; // Reset paused state when completely stopped
}

// Reset timer when restarting game
function resetTimer() {
    stopTimer(); // Stop the timer before reset
    seconds = 0;
    minutes = 0;
    timerElement.textContent = "00:00"; // Reset the timer display
    startTimer();
}

window.onload = startTimer;
