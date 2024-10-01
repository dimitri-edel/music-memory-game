/**
 * Musical Note Interaction
 *
 * This script controls sound interactions for musical note cards.
 *
 * Features:
 * - Play sound when a card is clicked and when hovering after the first click
 * - Tooltip updates from "Click for sound" to "Hover for sound" after the first click
 *
 * Other:
 * - Sound volume set to 20% for better user experience
 * - Code inspired by:
 *    - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
 *    - https://www.w3schools.com/jsref/dom_obj_audio.asp
 *
 * Author: JaqiKal
 * Date: September 2024
 */

// Function to play sound
function playSound(audioId) {
  const sound = document.getElementById(audioId);
  if (sound) {
    sound.volume = 0.2; // Set volume to 20%
    sound.currentTime = 0; // Reset the audio to the start
    sound.play();
  }
}

let firstClickDone = false; // Track whether the first click has happened

// Add event listeners to each card for both click and hover
document.querySelectorAll(".card").forEach((card, index) => {
  const sounds = ["sound-4", "sound-0", "sound-4b"]; // Array to map sounds to cards
  let isClicked = false;

  // Handle click event to enable sound on hover and change tooltip
  card.addEventListener("click", () => {
    if (!firstClickDone) {
      firstClickDone = true; // Mark that the first click has been made
      // Change tooltip for all cards to "Hover for sound"
      document.querySelectorAll(".card").forEach((card) => {
        card.setAttribute("title", "Hover for sound"); // Update tooltip on all cards
      });
    }

    // Play sound immediately on first click
    if (!isClicked) {
      playSound(sounds[index]);
      isClicked = true;
    }
  });

  // Hover event to play sound if the first click has been made
  card.addEventListener("mouseenter", () => {
    if (firstClickDone) {
      playSound(sounds[index]);
    }
  });
});

// Reset all sounds and interactions when leaving the page or refreshing
window.addEventListener("beforeunload", () => {
  firstClickDone = false; // Reset the click tracking
});
