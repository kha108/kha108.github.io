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

