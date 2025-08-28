const message = document.getElementById("message");
const surveySection = document.getElementById("surveySection");
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");

let userStart = 0;
let reward = 0;
let currentQuestion = 0;

const questions = [
  { q: "What is 2 + 2?", a: "4" },
  { q: "Capital of UK?", a: "London" },
  { q: "What is 5 x 3?", a: "15" }
];

document.getElementById("startZero").addEventListener("click", () => {
    userStart = 0;
    reward = 5;
    startSurvey();
});

document.getElementById("startFive").addEventListener("click", () => {
    userStart = 5;
    reward = 15;
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
