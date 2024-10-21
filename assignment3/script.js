// Button controls
const audio = document.getElementById('bgm');
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
// ----------------------------------------------------------

// Step 1: Define the game state variables
let currentStep = 1;  // Track which step the player is on
let dropCount = 0;    // Count how many items have been dropped
const requiredItems = {
    1: '#item4',  // Step 1 requires the token
    2: 3,        // Step 2 requires 4 items (any items)
};

const totalSteps = 3; // Number of steps in the game

// Elements in the game
const dropBox = document.querySelector('#dropBox');
const draggableItems = document.querySelectorAll('.draggable');
const instructionText = document.querySelector('#instructions');

// Set initial instructions
instructionText.textContent = "";

// Step 2: Add drag-and-drop event listeners
draggableItems.forEach(item => {
    item.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', event.target.id);  // Set the id of the dragged item
    });
});

// Handle drop
dropBox.addEventListener('dragover', function(event) {
    event.preventDefault(); 
});

dropBox.addEventListener('drop', function(event) {
    event.preventDefault();

    // Get the dragged element's id
    const draggedElementId = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(draggedElementId);

    // Check if the correct item has been dropped for the current step
    if (currentStep === 1) {
        // Step 1: Check if the correct item (Item 1) has been dropped
        if (draggedElementId === requiredItems[1]) {
            // Correct item dropped
            dropBox.appendChild(draggedElement);  // Add the item to the drop box
            draggedElement.remove();
            currentStep = 2;  // Move to Step 2
            dropCount = 0;    // Reset drop count
            instructionText.textContent = "Step 2: Drag 4 items into the drop box.";
        } else {
            // Incorrect item dropped
            alert("Wrong item! ");
        }
    } else if (currentStep === 2) {
        // Step 2: Allow any 3 items to be dropped
        dropBox.appendChild(draggedElement);
        draggedElement.remove();
        dropCount++;

        if (dropCount === requiredItems[3]) {
            // Step 2 complete
            currentStep = 3;
            instructionText.textContent = "Step 3: Click the drop box to finish.";
        }
    }
});

// Step 3: Handle the final step (clicking the drop box)
dropBox.addEventListener('click', function(event) {
    if (currentStep === 3) {
        instructionText.textContent = "Game complete! Well done!";
    }
});



//---------------------------------------------------------

// let draggedElement = null;

// const draggable = document.querySelector(".draggable");
// const dropBox = document.querySelector(".dropbox");
// // const dragToken = doucment.querySelector(".dragToken");
// // const message = document.querySelector(".message");
// //  -------------------------------------------------------

// // Step 1 variables
// let tokenDropped = false;

// // Step 2 
// let itemsDropped = 0;
// const requiredItems = 4;

// //Allow drop action
// function allowDrop(event){
//   event.preventDefault();
// }
// //----------------------------------------------------

// // Handle drag
// function drag(event) {
//   event.dataTransfer.setData("text", event.target.id);
// }
// //-------------------------------------------------------
// // Handle drop for step 1 (token drop)
// function dropToken(event) {
//   event.preventDefault();
//   const data = event.dataTransfer.getData("text");
//   const droppedToken = document.getElementById(data);

//   // Allow token to only be dropped once
//   if (data === "token" && !tokenDropped) {
//     event.target.appendChild(droppedToken);
//     tokenDropped = true;
//     droppedToken.style.display = 'none'; // Hide the token
//     document.getElementById('step2').classList.remove('disabled'); // Enable Step 2
//     document.getElementById('successMessageStep1').style.display = 'block';
// }
// }
// // --------------------------------------------------------
// // Handle drop for step 2
// // dropBox.addEventListener("drop", dropItem);

// function dropItem(event) {
//   event.preventDefault();
//   const data = event.dataTransfer.getData("text");
//   const droppedItem = document.getElementById(data);

//   if (droppedItem.classList.contains('draggable') && !droppedItem.classList.contains('dropped')) {
//     event.target.appendChild(droppedItem);
//     droppedItem.style.display = 'none'; // Hide item
//     droppedItem.classList.add('dropped');
//     itemsDropped++;

//       // Check if all items are dropped
//       if (itemsDropped === requiredItems) {
//           document.getElementById('successMessageStep2').style.display = 'block';
//           document.getElementById('step3').classList.remove('disabled'); // Enable Step 3
//       }
//   }
// }

// // function dropItem() {
// //   if (draggedElement) {
// //     const color = window
// //       .getComputedStyle(draggedElement)
// //       // .getPropertyValue("background-color");
// //     // const color = draggedElement.style.backgroundColor;
// //     dropBox.style.backgroundColor = color;
// //     dropBox.textContent = "+ Laundry";
// //     // draggedElement = null;
// //   }

// //-----------------------------------------------------------
// // Function to complete step 3 (+ spin animation)
// document.getElementById('dropBox').addEventListener('click', function() {
//   if (itemsDropped === requiredItems && tokenDropped) {
//       document.getElementById('successMessage').style.display = 'block';
//       document.getElementById('successAudio').play(); // Play audio
//   }
// });
// // image3.style.animation = 'spin 2s infinite linear'; // Start spinning