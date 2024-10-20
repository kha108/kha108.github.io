// let draggedElement = null;

// const draggable = document.querySelector(".draggable");
// const dropBox = document.querySelector(".dropbox");
// const message = document.querySelector(".message");
//  -------------------------------------------------------

// Step 1 variables
let tokenDropped = false;

// Step 2 
let itemsDropped = 0;
const requiredItems = 3;

//Allow drop action
function allowDrop(event){
  event.preventDefault();
}
//----------------------------------------------------

// basket.addEventListener("dragstart", startDrag);

// function startDrag() {
//   draggedElement = draggable;
// }

// dropBox.addEventListener("dragover", dragOver);

// function dragOver(event) {
// dropbox.classList.add('drag-over');
//  event.preventDefault(); //Allow drop
// }

// Handle drag
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
//-------------------------------------------------------
// Handle drop for step 1
function dropToken(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const droppedToken = document.getElementById(data);

  // Allow token to only be dropped once
  if (droppedToken.id === "token1" && !tokenDropped) {
    event.target.appendChild(droppedToken);
    tokenDropped = true;
    document.getElementById('step2').classList.remove('disabled'); // Enable Step 2
    document.getElementById('step1Message').innerText = "Token dropped! Proceed to Step 2.";
}
}
// --------------------------------------------------------
// Handle drop for step 2
dropBox.addEventListener("drop", dropItem);

function dropItems(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const droppedItem = document.getElementById(data);

  // Only allow each item to be dropped once
  if (!droppedItem.classList.contains("dropped")) {
      droppedItem.classList.add("dropped"); // Mark as dropped
      event.target.appendChild(droppedItem);
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
function completeStep3() {
  const image3 = document.getElementById('image3');
  image3.style.animation = 'spin 2s infinite linear'; // Start spinning
}