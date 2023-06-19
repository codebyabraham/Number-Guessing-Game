let targetNumber;
let attempts = 0;
let guessedNumberList = [];
let gameOver = false;

function startGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessedNumberList = [];
  gameOver = false;

  let attemptCount = document.getElementById("attemptCount");
  let guessedNumbers = document.getElementById("guessedNumbers");
  let message = document.getElementById("message");

  attemptCount.textContent = attempts;
  guessedNumbers.textContent = "";
  message.textContent = "";
}

function restartGame() {
  startGame();
  let guessInput = document.getElementById("guessInput");
  guessInput.value = "";
  guessInput.disabled = false;
  guessInput.focus();
}

function checkGuess() {
  let guessInput = document.getElementById("guessInput");
  let message = document.getElementById("message");
  let attemptCount = document.getElementById("attemptCount");
  let guessedNumbers = document.getElementById("guessedNumbers");

  let guess = parseInt(guessInput.value);
  if (isNaN(guess)) {
    message.textContent = "Please enter a valid number.";
    return;
  }

  if (gameOver) {
    message.textContent = "The game is over. Click Restart to play again.";
    return;
  }

  attempts++;
  attemptCount.textContent = attempts;

  guessedNumberList.push(guess);
  guessedNumbers.textContent = guessedNumberList.join(", ");

  if (guess < targetNumber) {
    message.textContent = "Too low! Try again.";
  } else if (guess > targetNumber) {
    message.textContent = "Too high! Try again.";
  } else {
    message.textContent = "Congratulations! You guessed the correct number.";
    guessInput.disabled = true;
    gameOver = true;
  }

  if (attempts >= 10 && !gameOver) {
    message.textContent = "Game over! You have reached the maximum number of attempts.";
    guessInput.disabled = true;
    gameOver = true;
  }

  guessInput.value = "";
  guessInput.focus();
}

// Start the game initially
startGame();
