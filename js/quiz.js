const quiz = document.getElementById("quiz-pokemon");

// Correction du quiz avec les boutons radio, comme dans le TP.
function corrigerQuiz(event) {
    event.preventDefault();

    const reponse1 = quiz.querySelector("input[name='q1']:checked");
    const reponse2 = quiz.querySelector("input[name='q2']:checked");
    const reponse3 = quiz.querySelector("input[name='q3']:checked");
    let score = 0;

    if (reponse1.value === "60") {
        score++;
    }
    if (reponse2.value === "energie") {
        score++;
    }
    if (reponse3.value === "5") {
        score++;
    }

    document.getElementById("score-quiz").textContent = "Ton score : " + score + " / 3";
    document.getElementById("correction-quiz").hidden = false;
}

quiz.addEventListener("submit", corrigerQuiz);
quiz.hidden = false;
