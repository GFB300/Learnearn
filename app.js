// Import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase config (your actual Firebase details)
const firebaseConfig = {
  apiKey: "AIzaSyCd8ff1xgSD11clngTNDBKC1ypkqwFdfIg",
  authDomain: "learnearn-9fd5f.firebaseapp.com",
  projectId: "learnearn-9fd5f",
  storageBucket: "learnearn-9fd5f.firebasestorage.app",
  messagingSenderId: "789092873831",
  appId: "1:789092873831:web:68ff51b4a6e1bb0c5ac6c2",
  measurementId: "G-HDWYLMFBEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Survey questions
const surveys = [
  { q: "What is 2 + 2?", a: "4" },
  { q: "Capital of France?", a: "Paris" },
  { q: "What color is the sky?", a: "Blue" },
  { q: "Which planet do we live on?", a: "Earth" },
  { q: "What is 10 - 6?", a: "4" }
];

let currentQuestion = 0;
let balance = 0;

// DOM elements
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");
const balanceDisplay = document.getElementById("balanceDisplay");

// Show first question
function showQuestion() {
  if (currentQuestion < surveys.length) {
    questionEl.innerText = surveys[currentQuestion].q;
    answerInput.value = "";
  } else {
    questionEl.innerText = "✅ Survey complete!";
    answerInput.style.display = "none";
    submitAnswer.style.display = "none";
  }
}

// Submit answer handler
submitAnswer.addEventListener("click", async () => {
  const userAnswer = answerInput.value.trim();
  const current = surveys[currentQuestion];
  let reward = 0;

  if (userAnswer.toLowerCase() === current.a.toLowerCase()) {
    reward = 5; // correct answer
  } else {
    reward = 5; // bonus for wrong answer (so everyone earns)
  }

  balance += reward;
  balanceDisplay.innerText = `Balance: £${balance}`;

  // Save to Firebase
  try {
    await addDoc(collection(db, "responses"), {
      question: current.q,
      answer: userAnswer,
      correctAnswer: current.a,
      reward: reward,
      totalBalance: balance,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error("Error saving response:", err);
  }

  currentQuestion++;
  showQuestion();
});

// Start by showing the first question
showQuestion();
