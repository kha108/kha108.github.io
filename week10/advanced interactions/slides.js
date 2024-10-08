const slides = document.querySelector(".slides");
console.log(slides);
let slideIndex = 0;
let distance = 0;

// add click events to the slides navigation buttons
const prevButton = document.querySelector("#prev-button");
console.log(prevButton);
prevButton.addEventListener("click", gotoPrevious);
function gotoPrevious() {
}

const nextButton = document.querySelector("#next-button");
console.log(nextButton);
nextButton.addEventListener("click", gotoNext);
function gotoNext() {
    if(slideIndex < slideIndex.length -1) {
        slideIndex++;
        distance = slides[slideIndex].offsetLeft;
        console.log(distance);
        window.scrollTo({ left: distance, behavior: "smooth"});
    }

}