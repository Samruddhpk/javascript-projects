// selectors

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// setup slides
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

// next & prev
let counter = 0;
nextBtn.addEventListener("click", function () {
    counter++;
    carousal();
});

prevBtn.addEventListener("click", function () {
    counter--;
    carousal();
});


// carousal effect
function carousal() {
    // 2 features
    // 1. circle array

    // if (counter === slides.length) {
    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }


    // 2. hide buttons
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }

    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}


// hide prev by default
prevBtn.style.display = "none";