// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCd8ff1xgSD11clngTNDBKC1ypkqwFdfIg",
  authDomain: "learnearn-9fd5f.firebaseapp.com",
  projectId: "learnearn-9fd5f",
  storageBucket: "learnearn-9fd5f.appspot.com",
  messagingSenderId: "789092873831",
  appId: "1:789092873831:web:68ff51b4a6e1bb0c5ac6c2",
  measurementId: "G-HDWYLMFBEE"
};

// Init Firebase + Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form handling
const form = document.getElementById("survey-form");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const answer = document.getElementById("answer").value;

  try {
    await addDoc(collection(db, "surveyResponses"), {
      question: document.getElementById("question").innerText,
      answer: answer,
      timestamp: new Date()
    });

    statusEl.innerText = "✅ Survey completed!";
    form.reset();
  } catch (err) {
    console.error("Error writing to Firestore: ", err);
    statusEl.innerText = "❌ Error saving response.";
  }
});
