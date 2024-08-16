const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


// manually adding height with "show-links" class
// contains - method
// add ,remove and toggle methods
// TODO: Remember we can add dynamic height to any element using Javascript - getBoundingClientRect() => used in Scroll Project


toggleBtn.addEventListener("click", function () {
    // console.log(links.classList.contains("links"));
    // console.log(links.classList.contains("show-links"));

    // 1 way
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }

    // Another way
    links.classList.toggle("show-links");

});
