const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here




let countdown;
let timeLeft = 20 * 60; // 20 minutes in seconds
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    startButton.disabled = true;
    restartButton.disabled = false;

    countdown = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = 'Time\'s up!';
        }
    }, 1000);
}

function restartTimer() {
    clearInterval(countdown);
    timeLeft = 20 * 60; // Reset to 20 minutes
    updateDisplay();
    startButton.disabled = false;
}

startButton.addEventListener('click', startTimer);
restartButton.addEventListener('click', restartTimer);

// Initial setup
updateDisplay();
restartButton.disabled = true;