"use strict";

const questionElements = document.querySelectorAll(".questions__block");

questionElements.forEach((question) => {
    question.addEventListener("click", function (e) {
        const clickedQuestion = e;
        console.log(e.target);
        const answer = question.querySelector(".answer");
        question.classList.toggle("active");

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
