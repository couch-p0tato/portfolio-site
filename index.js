// ----------------- Home Page Text Slide-In Begins -------------------------- //

// Array of sentences to display
const sentences = [
    "an Immersive Storyteller",
    "a Screenwriter",
    "a Creative"
];

let currentSentenceIndex = 0; // Index of the current sentence
let currentLetterIndex = 0; // Index of the current letter

const sentenceDisplay = document.getElementById('sentenceDisplay');

// Function to display sentences letter by letter
function displayLetterByLetter() {
const currentSentence = sentences[currentSentenceIndex];
const currentLetter = currentSentence.charAt(currentLetterIndex);
sentenceDisplay.textContent += currentLetter;

currentLetterIndex++;

// If all letters in the current sentence are displayed, reverse back to the first letter
if (currentLetterIndex === currentSentence.length) {
    reverseToFirstLetter(currentSentence);
    return;
}

setTimeout(displayLetterByLetter, 150); // Speed of displaying letters
}

// Function to reverse back to the first letter of the sentence
function reverseToFirstLetter(sentence) {
if (currentLetterIndex === 0) {
    setTimeout(clearSentence, 150); // Delay before starting to display the next sentence
    return;
}

const partialSentence = sentence.substring(0, currentLetterIndex);
sentenceDisplay.textContent = partialSentence;

currentLetterIndex--;

setTimeout(() => reverseToFirstLetter(sentence), 30); // Speed of reversing letters
}

// Function to clear displayed sentence
function clearSentence() {
sentenceDisplay.textContent = '';
currentLetterIndex = 0;
currentSentenceIndex++;
if (currentSentenceIndex === sentences.length) {
    currentSentenceIndex = 0; // Loop back to the first sentence
}
setTimeout(displayLetterByLetter, 600); // Delay before displaying next sentence
}

// Start the process
displayLetterByLetter();

// ----------------- Home Page Text Slide-In Ends -------------------------- //


// ----------------- Mobile-Menu Toggle -------------------------- //

function toggleMenu() {
    var menu = document.querySelector(".right-nav");
    var menuIcon = document.querySelector(".bar-icon");
    var closeIcon = document.querySelector(".x-icon");
  
    if (menu.style.display === "block") {
      menu.style.display = "none";
      menuIcon.style.display = "inline-block";
      closeIcon.style.display = "none";
    } 
    else {
      menu.style.display = "block";
      menuIcon.style.display = "none";
      closeIcon.style.display = "inline-block";
    }
}
  