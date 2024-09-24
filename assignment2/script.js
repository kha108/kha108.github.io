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




let countdownDuration = 20 * 60; // 20 minutes in seconds (20 * 60 = 1200 seconds)
let timer; // Global timer variable
let countdownInterval; // To store the interval ID

// Function to start or restart the countdown
function startCountdown(duration) {
  timer = duration; // Reset the timer to the given duration

  if (countdownInterval) {
    clearInterval(countdownInterval); // Clear the previous interval if it exists
  }

  // Set the new interval
  countdownInterval = setInterval(function() {
    let minutes = Math.floor(timer / 60);
    let seconds = Math.floor(timer % 60);

    // Format time (add leading zero if needed)
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update the display
    // Display the countdown
    document.getElementById("timer").textContent = minutes + ":" + seconds;

    // Decrement the timer
    if (--timer < 0) {
      clearInterval(countdownInterval); // Stop the countdown when finished
      document.getElementById("timer").textContent = "Time's up!";
    }
  }, 1000); // Update every second
}

// Event listener for the "Restart" button
document.getElementById("restart-btn").addEventListener("click", function() {
  startCountdown(countdownDuration); // Restart the countdown
});

// Start the countdown on page load
startCountdown(countdownDuration);