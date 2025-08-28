// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";

// Your Firebase config (from your Firebase console)
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
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Handle survey form submission
document.getElementById("survey-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const question = document.getElementById("question").innerText;
  const answer = document.getElementById("answer").value;

  try {
    await addDoc(collection(db, "surveys"), {
      question: question,
      answer: answer,
      timestamp: new Date()
    });

    alert("✅ Survey saved successfully!");
    document.getElementById("answer").value = ""; // clear input
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("❌ Failed to save survey. Check console.");
  }
});
