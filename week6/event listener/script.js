// const myButton = document.querySelector("#my-button"); //add # because its id
// console.log(myButton);

// const count = document.querySelector("#count");
// console.log(count);

// let buttonCount = 0;
// myButton.addEventListener("click", myFunction);

// function myFunction(){
//     // buttonCount = buttonCount + 1;
//     buttonCount++;
//     console.log("hey did you just click me?");
//     count.textContent = buttonCount;
// }

const boxContainer = document.querySelector(".box-container"); 
// not #, its not an id its a class (easier to style)
console.log(boxContainer);

const toggleButton = document.querySelector("#toggle-button");
console.log(toggleButton);

toggleButton.addEventListener("click", toggleMe);

function toggleMe() {

    console.log("toggle button is clicked");
    boxContainer.classList.toggle("row-reverse");
}

let addButton = document.querySelector("#add-button");
addButton.addEventListener("click", addMe);

let count = 0;
function addMe() {

    // boxContainer.innerHTML += `<div class="box purple-box"></div>
    // <div class="box coral-box"></div>
    // `;
    if(count % 2 === 0) {
        boxContainer.innerHTML += `<div class="box purple-box"></div>`;
    } else {
        boxContainer.innerHTML += `<div class="box coral-box"></div>`;
    }
    count++;
}

let removeButton = document.querySelector("#remove-button");
removeButton.addEventListener("click", removeMe);

function removeMe() {
    let lastBox = boxContainer.lastElementChild;
    console.log(lastBox);
    if (lastBox) {
      lastBox.remove();
    }
    count--;
  }

boxContainer.addEventListener("mouseenter", dropMe);
function dropMe() {
    boxContainer.classList.add("drop");    
  }
  
boxContainer.addEventListener("mouseleave", pickMe);
function pickMe() {
    boxContainer.classList.remove("drop");
  }

// addButton.addEventListener("mouseenter", colorMe);
// addButton.addEventListener("mouseout", decolorMe);
// function colorMe();{
//     addButton.classList.add("purple-box")
// }


// function decolorMe();{
//     addButton.classList.add("purple-box")
// }





