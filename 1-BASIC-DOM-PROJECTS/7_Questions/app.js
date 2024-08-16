
// 2. using selectors inside element

const questions = document.querySelectorAll(".question");


questions.forEach(function (question) {
    // get button inside question
    const btn = question.querySelector(".question-btn");

    // add event
    btn.addEventListener("click", function () {
        // questions
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("showText");
            }
        });
        // toggle showText 
        question.classList.toggle("showText");
    });
});



// 1. traverse dom - getting parent element from child
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const question = e.currentTarget.parentElement.parentElement;

//         question.classList.toggle("showText");
//     });
// });
