// Array of words for the game
const words = ["butterfly", "truecrime", "cupcakes", "slushy", "darren"];

// Select a random word from the array
let word = words[Math.floor(Math.random() * words.length)];

// Array to store guessed letters
let guessedLetters = [];

// HTML elements
const wordElement = document.getElementById("word");
const lettersElement = document.getElementById("letters");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");

// Function to display the word with underscores for missing letters
function displayWord() {
  let display = "";
  for (let letter of word) {
    if (guessedLetters.includes(letter)) {
      display += letter + " ";
    } else {
      display += "_ ";
    }
  }
  wordElement.textContent = display;
}

// Function to handle a letter guess
function guessLetter() {
  let letter = guessInput.value.toLowerCase();

  // Check if the letter has already been guessed
  if (guessedLetters.includes(letter)) {
    alert("You already guessed that letter!");
    return;
  }

  // Add the letter to the guessedLetters array
  guessedLetters.push(letter);

  // Update the guessed letters display
  let li = document.createElement("li");
  li.textContent = letter;
  lettersElement.appendChild(li);

  // Check if the letter is in the word
  if (word.includes(letter)) {
    displayWord();

    // Check if the word has been completely guessed
    if (!wordElement.textContent.includes("_")) {
      alert("Congratulations! You saved him!!");
    }
  } else {
    // Check if the player lost
    if (guessedLetters.length >= 10) {
      alert("Game over he is hanging! The word was: " + word);
      resetGame();
    }
  }

  // Clear the guess input
  guessInput.value = "";
}

// Function to reset the game
function resetGame() {
  // Clear the guessed letters
  guessedLetters = [];
  lettersElement.innerHTML = "";

  // Select a new random word
  word = words[Math.floor(Math.random() * words.length)];

  // Reset the word display
  displayWord();
}

// Event listener for the guess button
guessButton.addEventListener("click", guessLetter);
resetGameButton.addEventListener("click", resetGame);

// Display the initial word
displayWord();
