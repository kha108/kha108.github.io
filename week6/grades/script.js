function checkGrade(){
    const a1 = document.querySelector("#answer1");
    console.log(a1.value);
    const a2 = document.querySelector("#answer2");
    console.log(a2.value);
    let a1value = parseFloat(a1.value);
    let a2value = parseFloat(a2.value);
    let total = calculateTotal(a1value, a2value);
    //let total = parseFloat(a1.value) + parseFloat(a2.value);
    console.log(total);
    giveReport(total);

}

function calculateTotal(a, b)
{
    let sum = a + b;
    return sum;

}

function giveReport(score) {
    const report = document.querySelector("#report");
    if (score >30){
        console.log("You got HD");
        report.textContent = "You got HD";
}
else if (score >20 && score <=30)
{
    console.log("You got D");
    report.textContent = "You got D";
}
}

//add # cuz its id 
const myCat = document.querySelector("#my-cat")
console.log(myCat);
// myCat.classList.add("round");

//on click it alternate border
function toggleMe() {
    myCat.classList.toggle("round");
}

// inner html allows to show the entire tag
const header = document.querySelector("header");
console.log(header.innerHTML);
let personality = "boring";
let doubt = "doubt";
// add back-tick ` when using inner html 
// use += to add the heading tgt
// use $ to change the words that is in the {}
header.innerHTML += `<p class= "red-heading"> is ${personality}!</p>
<p class= "blue-heading"> do you have any ${doubt}? </p> 
`;

// const para = document.querySelector("#question1");
// console.log(para.textContent);
// para.textContent = "What is your as1 score?";
// para.classList.add("red-heading");

// const para1 = document.querySelector("#question2");
// console.log(para1.textContent);
// para1.textContent = "What is your as2 score?";

// const para = document.querySelector("#question2");
// console.log(para.textContent);
// para.textContent = "What is your as2 score?"

// const allPara = document.querySelectorAll("p");
// console.log(allPara);

// const heading = document.querySelector("h1");
// console.log(heading.textContent);

// heading.textContent = "new heading";
// heading.classList.add("red-heading");
// heading.classList.add("blue-heading");
// heading.classList.remove("blue-heading");

// const abcd = document.querySelector(".abcd");
// console.log(abcd);

//  const allAbcd = document.querySelectorAll(".abcd");
//  console.log(allAbcd);