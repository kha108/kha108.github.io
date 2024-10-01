document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('my-audio');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const playPauseImg = document.getElementById('play-pause-img');
  const audioName = document.getElementById('audio-name');
  const audioImg = document.getElementById('audio-img');

  const tracks = [
    {
      name: 'Forest 1',
      src: 'erokia_ambient-wave-56-msfxp7-78.mp3',
      img: 'forest.jpeg',
    },
    {
      name: 'Milkyway 2',
      src: 'p-hase_Leapt,mp3',
      img: 'milkyway.jpeg',
    },
    {
      name: 'Beach 3',
      src: 'p-hase_Water-Feature.mp3',
      img: 'audio3.png',
    },
  ];

  let currentTrack = 0;

  function loadTrack(index) {
    audio.src = tracks[index].src;
    audioName.textContent = tracks[index].name;
    audioImg.src = tracks[index].img;
    currentTrack = index;
    audio.play();
    updatePlayPauseIcon();
  }

  function updatePlayPauseIcon() {
    if (audio.paused) {
      playPauseImg.src = 'https://img.icons8.com/ios-glyphs/30/play--v1.png';
    } else {
      playPauseImg.src = 'https://img.icons8.com/ios-glyphs/30/pause--v1.png';
    }
  }

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    updatePlayPauseIcon();
  });

  document.getElementById('first-audio-btn').addEventListener('click', () => {
    loadTrack(0);
  });

  document.getElementById('second-audio-btn').addEventListener('click', () => {
    loadTrack(1);
  });

  document.getElementById('third-audio-btn').addEventListener('click', () => {
    loadTrack(2);
  });

  audio.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
  });

  // Initialize with the first track
  loadTrack(0);
});
