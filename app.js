 
    startSurvey();
});

function startSurvey() {
    surveySection.style.display = "block";
    message.innerText = `You started from £${userStart}. Complete the survey to earn rewards!`;
    currentQuestion = 0;
    showQuestion();
}

function showQuestion() {
    if(currentQuestion < questions.length) {
        questionEl.innerText = questions[currentQuestion].q;
        answerInput.value = "";
    } else {
        surveySection.style.display = "none";
        message.innerText = `Survey complete! You earned £${reward}.`;
    }
}

submitAnswer.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim();
    if(userAnswer.toLowerCase() === questions[currentQuestion].a.toLowerCase()) {
        reward += 0; // correct answer, no extra
    } else {
        reward += 5; // wrong answer bonus
    }
    currentQuestion++;
    showQuestion();
});
