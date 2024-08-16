// array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// dom elements
const btn = document.querySelector(".btn");
const textColor = document.querySelector(".color");


// event
btn.addEventListener("click", function () {
    let hexColor = "#";
    // 6 values we need to generate hex color
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomValues()];
    }

    textColor.textContent = hexColor;
    textColor.style.color = hexColor;
    document.body.style.backgroundColor = hexColor;

});



// random
function getRandomValues() {
    return Math.floor(Math.random() * hex.length);
}
