function startGame() {
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let guess;

  while (true) {
    let input = prompt("Guess a number between 1 and 100:");

    // Пользователь нажал Cancel
    if (input === null) {
      console.log("Game cancelled by user.");
      break;
    }

    guess = Number(input);
    attempts++;

    if (guess < 1 || guess > 100) {
      console.log("Your guess is out of range. Please try again.");
      continue;
    }

    if (guess < secretNumber) {
      console.log("Too low! Try again.");
    } else if (guess > secretNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log(
        `Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`
      );
      break;
    }
  }
}
// Start the game when the script is loaded
