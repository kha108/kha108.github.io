const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playPauseMe);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function playPauseMe() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "icons8-play-30.png"
  } else {
    myVideo.pause();
    playPauseImg.src= "icons8-pause-30.png"
  }
}