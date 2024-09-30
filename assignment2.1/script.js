const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const volumeControl = document.querySelector("#volume-control");
let currentTrack = 0;

// Array of audio sources
const audioFiles = [
  "ambient-wave.mp3", // Replace with actual audio file paths
  "Leapt.mp3",
  "Water-Feature.mp3"
];

// Load the first track
loadTrack(currentTrack);

// Event Listeners
playPauseBtn.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", updateProgressBar);
volumeControl.addEventListener("input", updateVolume);
document.querySelector("#next-btn").addEventListener("click", playNext);
document.querySelector("#prev-btn").addEventListener("click", playPrevious);

// Load an audio track based on the index
function loadTrack(index) {
  audio.src = audioFiles[index];
}

// Toggle between playing and pausing the audio
function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    updatePlayPauseIcon(true);
  } else {
    audio.pause();
    updatePlayPauseIcon(false);
  }
}

// Update the play/pause button icon
function updatePlayPauseIcon(isPlaying) {
  if (isPlaying) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// Update the progress bar as the audio plays
function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}

// Update the volume based on the slider input
function updateVolume() {
  audio.volume = volumeControl.value;
}

// Play the next track in the array
function playNext() {
  currentTrack = (currentTrack + 1) % audioFiles.length;
  loadTrack(currentTrack);
  audio.play();
  updatePlayPauseIcon(true);
}

// Play the previous track in the array
function playPrevious() {
  currentTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
  loadTrack(currentTrack);
  audio.play();
  updatePlayPauseIcon(true);
}

// Automatically move to the next track when the current one ends
audio.addEventListener("ended", playNext);