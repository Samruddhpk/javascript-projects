// array
const colors = ["red", "orange", "#f15025", "rgba(133, 122, 200)"];

// select dom elements
const btn = document.querySelector(".btn");
const textColor = document.querySelector(".color");

// listen to event
btn.addEventListener("click", function () {

    // picks any random from colors array 
    let color = colors[getRandomValue()];
    document.body.style.backgroundColor = color;
    textColor.style.color = color;
    textColor.innerHTML = color;
});



// getRandom Values function

function getRandomValue() {
    return Math.floor(Math.random() * colors.length);
}
