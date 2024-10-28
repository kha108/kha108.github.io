const dragItems = document.querySelectorAll(".draggable");
console.log(dragItems);
const audio = document.querySelector("#bgm");
const laundry = document.querySelector("#laundry");
const blip = document.querySelector("#blip");
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
 
dropBox.addEventListener("click", playLaundry);
function playLaundry () {
    laundry.play();
}

// -----------------------------------------------------
// Pop-up button controls 
const openPopupButton = document.getElementById('openPopupButton');
const popupOverlay = document.getElementById('popupOverlay');
const closePopupButton = document.getElementById('closePopupButton');

// Show the pop-up when the button is clicked
openPopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';  // Display the overlay and pop-up
});

// Close the pop-up when the close button is clicked
closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';  // Hide the overlay and pop-up
});

// Optional: Close the pop-up if the user clicks outside the pop-up box
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {  // Check if the overlay itself was clicked
        popupOverlay.style.display = 'none';
    }
});
