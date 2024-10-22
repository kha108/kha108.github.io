const dragItems = document.querySelectorAll(".draggable");
console.log(dragItems);
const audio = document.querySelector("#bgm");
const laundry = document.querySelector("#laundry");
let draggedElement = null;

let currentStep = 0;

for(let i=0;i<dragItems.length;i++)
{
dragItems[i].addEventListener("dragstart", function () {
    if (currentStep === i) {
        draggedElement = dragItems[i];
        // dragItems[i].style.display= "none";
        console.log(draggedElement);
        currentStep++;
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
 
dropBox.addEventListener("click", playLaundry);
function playLaundry () {
    laundry.play();
}
