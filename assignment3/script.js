let draggedElement = null;

const draggable = document.querySelector(".draggable");
const dropBox = document.querySelector(".dropbox");
// const dragToken = doucment.querySelector(".dragToken");
// const message = document.querySelector(".message");
//  -------------------------------------------------------

// Step 1 variables
let tokenDropped = false;

// Step 2 
let itemsDropped = 0;
const requiredItems = 4;

//Allow drop action
function allowDrop(event){
  event.preventDefault();
}
//----------------------------------------------------

// Handle drag
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
//-------------------------------------------------------
// Handle drop for step 1 (token drop)
function dropToken(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const droppedToken = document.getElementById(data);

  // Allow token to only be dropped once
  if (data === "token" && !tokenDropped) {
    event.target.appendChild(droppedToken);
    tokenDropped = true;
    droppedToken.style.display = 'none'; // Hide the token
    document.getElementById('step2').classList.remove('disabled'); // Enable Step 2
    document.getElementById('successMessageStep1').style.display = 'block';
}
}
// --------------------------------------------------------
// Handle drop for step 2
// dropBox.addEventListener("drop", dropItem);

function dropItem(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const droppedItem = document.getElementById(data);

  if (droppedItem.classList.contains('draggable') && !droppedItem.classList.contains('dropped')) {
    event.target.appendChild(droppedItem);
    droppedItem.style.display = 'none'; // Hide item
    droppedItem.classList.add('dropped');
    itemsDropped++;

      // Check if all items are dropped
      if (itemsDropped === requiredItems) {
          document.getElementById('successMessageStep2').style.display = 'block';
          document.getElementById('step3').classList.remove('disabled'); // Enable Step 3
      }
  }
}

// function dropItem() {
//   if (draggedElement) {
//     const color = window
//       .getComputedStyle(draggedElement)
//       // .getPropertyValue("background-color");
//     // const color = draggedElement.style.backgroundColor;
//     dropBox.style.backgroundColor = color;
//     dropBox.textContent = "+ Laundry";
//     // draggedElement = null;
//   }

//-----------------------------------------------------------
// Function to complete step 3 (+ spin animation)
document.getElementById('dropBox').addEventListener('click', function() {
  if (itemsDropped === requiredItems && tokenDropped) {
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('successAudio').play(); // Play audio
  }
});
// image3.style.animation = 'spin 2s infinite linear'; // Start spinning