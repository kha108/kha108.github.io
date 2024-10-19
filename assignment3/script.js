// let draggedElement = null;

const draggable = document.querySelector(".draggable");
const dropBox = document.querySelector(".dropbox");
const message = document.querySelector(".message");

let itemCounter = 0; // To track number of dropped items

basket.addEventListener("dragstart", startDrag);

function startDrag() {
  draggedElement = draggable;
}

dropBox.addEventListener("dragover", dragOver);

function dragOver(event) {
dropbox.classList.add('drag-over');
 event.preventDefault(); //Allow drop
}

dropBox.addEventListener("drop", dropItem);

itemCounter++;

function dropItem() {
  // if (draggedElement) {
  //   const color = window
  //     .getComputedStyle(draggedElement)
  //     // .getPropertyValue("background-color");
  //   // const color = draggedElement.style.backgroundColor;
  //   dropBox.style.backgroundColor = color;
  //   dropBox.textContent = "+ Laundry";
  //   // draggedElement = null;
  }
