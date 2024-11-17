const dragItems = document.querySelectorAll(".draggable");
console.log(dragItems);
const audio = document.querySelector("#bgm");
const laundry = document.querySelector("#laundry");
const blip = document.querySelector("#blip");
let draggedElement = null;

// A breakdown of the gameplay is, the player have to follow the set of rules listed
// in the steps guide. If player does not follow the steps accordingly, it will not 
// allow the player to proceed to the next step. Only when player followed the right 
// step, a blip sfx will play to indicate they moved on to the next step, and if they 
// completed a game, a victory audio will play.
let currentStep = 0;

for(let i=0;i<dragItems.length;i++)
{
dragItems[i].addEventListener("dragstart", function () {
    if (currentStep === i) {
        draggedElement = dragItems[i];
        // dragItems[i].style.display= "none";
        console.log(draggedElement);
        currentStep++;
        blip.play();
    }
}
);
}

const dropBox = document.querySelector('#dropBox');

// Handle drop
dropBox.addEventListener('dragover', function(event) {
    event.preventDefault(); 
    // event.style.display= "none";
});


dropBox.addEventListener("drop", handleDrop);

function handleDrop()
{
    if (draggedElement)
    {
        draggedElement.style.display= "none";
        draggedElement=null;
        if (currentStep === 4) {
            laundry.play();
        }
        if (currentStep === 5) { 
            laundry.pause();
            audio.play();
        }
    }
}
// --------------------------------------------------------
// Button controls
const playPauseBtn = document.getElementById('playPauseBtn');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.classList.remove('play');
        playPauseBtn.classList.add('pause');
    } else {
        audio.pause();
        playPauseBtn.classList.remove('pause');
        playPauseBtn.classList.add('play');
    }
}
 
// dropBox.addEventListener("click", playLaundry);
// function playLaundry () {
//     laundry.play();
// }

// -----------------------------------------------------
