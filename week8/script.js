const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

playPauseBtn.addEventListener("click", togglePlay);

function togglePlay()
{
    if (myVideo.paused || myVideo.ended){
        myVideo.play();
        playPauseImg.src= "https://img.icons8.com/ios-glyphs/30/pause--v1.png"
    } else {
        myVideo.pause();
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"
    }
}

const playUnmuteBtn = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteBtn);

muteUnmuteBtn.addEventListener("click", toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleSound()
{
    if (myVideo.muted) {
        myVideo.muted = false;
        muteUnmuteBtn.style.backgroundColor = "#d5cea3";
        // playUnmuteImg.src= "https://img.icons8.com/ios-glyphs/30/high-volume--v1.png"
    } else {
        myVideo.muted();
        myVideo.muted = true;
        muteUnmuteBtn.style.backgroundColor = ""
        // playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png"
    }
}

const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar);

myVideo.addEventListener("timeUpdate", fillProgress);

function fillProgress()
{
 const currentTime = myVideo.currentTime;
//  console.log("current time", currentTime.toFixed(2));
 const progress = (currentTime / myVideo.duration) * 100;
//  console.log("progress", progress.toFixed(2));
 progressBar.style.width = progress + "%";
}

const step1Btn = document.querySelector("#step-1-btn");
console.log(step1Btn);

step1Btn.addEventListener("click", gotoStep1);

function gotoStep1(){
    myVideo.currentTime = 18.4;
}

const step2Btn = document.querySelector("#step-2-btn");
console.log(step2Btn);

step1Btn.addEventListener("click", gotoStep2);

function gotoStep2(){
    myVideo.currentTime = 45.67;
}

const likeBtn = document.querySelector("#like-btn");
console.log(likeBtn);

likeBtn.addEventListener("click", addLikes);

function addLikes(){
    likeCount++;
    likes.textContent = likeCount;

}


myVideo.addEventListener("dblclick", toggleFullScreen);

function toggleFullScreen() {
    console.log("video is double clicked");
    if(document.fullscreenElement){
        myVideo.requestFullscreen();
    } else {
        document.exitFullscreen();
    }

}
//playlist format
const videos = [
{
    name: "zenscape",
    src: "zenscape.mp4"
},
{
    name: "stardust",
    src: "stardust.mp4"
}
];

let currentIndex = 0;
const videoName = document.querySelector("#video-name");

const firstBtn = document.querySelector("#first-video-btn");
console.log(firstBtn);
firstBtn.addEventListener("click", function() {
    chooseVIdeo(0);
});

const secondBtn = document.querySelector("#second-video-btn");
console.log(secondBtn);
secondBtn.addEventListener("click", function() {
    chooseVIdeo(1);
});

function chooseVIdeo(no) {
    myVideo.src = videos[no].src;
    videoName.textContent = videos[no].name;
    console.log(myVideo,src);
    myVideo.load();
    myVideo.play();
}




