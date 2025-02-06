document.addEventListener("DOMContentLoaded", function () {
    const closeModalButton = document.getElementById("closeModalButton");
    const modal = document.getElementById("modal");

    // Ensure modal is displayed after page load
    modal.style.display = "flex";

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none"; // Hide the modal when 'Proceed' is clicked
    });

    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseText = document.getElementById("surpriseText");

    surpriseButton.addEventListener("click", function () {
        surpriseText.classList.toggle("hidden");
        surpriseButton.textContent = surpriseText.classList.contains("hidden")
            ? "Click for a Surprise 💖"
            : "Hide Message 💕";
    });

    // Surprise Pop-up functionality
    const surprisePopUp = document.getElementById("surprisePopUp");

    // Show surprise pop-up after 3 seconds (adjust as needed)
    setTimeout(function() {
        surprisePopUp.style.display = "block"; // Show the surprise pop-up
    }, 30000); // 18000ms = 3 seconds
});
