"use strict";

const questionElements = document.querySelectorAll(".questions__block");

questionElements.forEach((question) => {
    question.addEventListener("click", function (e) {
        const clickedQuestion = e;

        const answer = question.querySelector(".answer");
        const svg = question.querySelector("svg");

        question.classList.toggle("active");
        svg.classList.toggle("rotate");

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
