let currentMusic = 0;

const music = document.querySelector('#audio');

const progressBar = document.querySelector('.progress-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');

// Song List//
const songs = [
  {
    path: "coverless-book-lofi.mp3",
    songName: "Coverless Book",
  },
  {
    path: "lofi-orchestra.mp3",
    songName: "Lofi Orchestra",
  },
  {
    path: "summer-rain.mp3",
    songName: "Summer Rain",
  },
]

playBtn.addEventListener('click', ()=> {
  playBtn.classList.toggle('pause');
  disk.classList.toggle('play');
})

// setup music

const setMusic = (i) => {
  progressBar.value = 0; //set range slide value to 0//
  let song = songs[i];
}

const playPauseButton = document.querySelector("#play-pause-btn");
// Event listener to toggle between playing and pausing video on clicking the button
playPauseButton.addEventListener("click", togglePlay);
const playPauseImg = document.querySelector("#play-pause-img");