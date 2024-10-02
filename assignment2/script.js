const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//Song titles//
const songs = ['summer-rain', 'lofi-orchestra', 'Coverless']

//Keep track of the songs//
let songIndex = 2

//Initially load song info DOM//
loadSong(songs[songIndex])

//Update song details//
function loadSong(song) {
  title.innerText = song
  audio.src = `music/${song}.mp3`
  cover.src = `images/${song}.jpg`
}

function playSong() {
  musicContainer.classList.add('play')
  playBtn.querySelector('action-btn').classList.add('play-btn')
  playBtn.querySelector('action-btn').classList.add('pause-btn')

  audio.play()
}

function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('action-btn').classList.add('play-btn')
  playBtn.querySelector('action-btn').classList.add('pause-btn')

  audio.pause()
}

//Event Listener//
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})