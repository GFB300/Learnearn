// Example survey questions
const questions = [
  "What’s your favourite color?",
  "What city were you born in?",
  "What’s your dream job?"
];

let currentQuestion = 0;
let balance = 0;

// Display the first question
function showQuestion() {
  document.getElementById("question").innerText = questions[currentQuestion];
}

function submitAnswer() {
  const input = document.getElementById("answerInput");
  const answer = input.value.trim();

  if (answer !== "") {
    balance += 5; // Add £5 for each answer
    document.getElementById("balanceDisplay").innerText = `Balance: £${balance}`;

    // Go to next question
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
      input.value = "";
    } else {
      document.getElementById("question").innerText = "You’ve completed the survey!";
      input.style.display = "none";
      document.getElementById("submitAnswer").style.display = "none";
    }
  }
}

// Hook up the button
document.getElementById("submitAnswer").addEventListener("click", submitAnswer);

// Show first question when page loads
showQuestion();
