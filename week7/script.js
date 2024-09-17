const popButton = document.querySelector("#pop-button");
console.log(popButton);

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

popButton.addEventListener("click", playPopSound);
function playPopSound() {
    popSound.play();
}

const playButton = document.querySelector("#play-button");
console.log(playButton);
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

const notify= document.querySelector("#notify");
console.log(notify);

const myVideo= document.querySelector("#my-video");
console.log(myVideo);
playButton.addEventListener("click", playNotify);
function playNotify() {
    // notify.play();
myVideo.play()
}

pauseButton.addEventListener("click", pauseNotify);
function pauseVideo() {
    // notify.pause();
    myVideo.pause();
}