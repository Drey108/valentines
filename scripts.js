// scripts.js

function redirectToConfirmation() {
    window.location.href = "confirmation.html";
}

// Function to toggle envelope flap
function toggleEnvelope() {
    const envelope = document.querySelector(".envelope-wrapper");
    envelope.classList.toggle("flap");
    document.getElementById("yes").style.display = "block"; // Show the "Yes" button when envelope is opened
}

// Add event listener to "Yes" button
document.getElementById("yes").addEventListener("click", redirectToConfirmation);

// Add event listener to "No" button
document.getElementById("no").addEventListener("click", () => {
    const envelope = document.querySelector(".envelope-wrapper");
    envelope.classList.remove("flap");
    document.getElementById("yes").style.display = "none"; // Hide the "Yes" button again
});

// Add event listener to heart button
document.getElementById("heart").addEventListener("click", toggleEnvelope);
