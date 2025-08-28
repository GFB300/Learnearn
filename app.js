console.log("Learnearn prototype running");

const message = document.getElementById("message");

document.getElementById("startZero").addEventListener("click", () => {
    alert("Survey complete! You earned £5.");
    message.innerText = "You started from £0 and now have £5!";
});

document.getElementById("startFive").addEventListener("click", () => {
    alert("Survey complete! Perfect score: £15 total.");
    message.innerText = "You started from £5 and now have £15!";
});
