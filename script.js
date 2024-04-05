function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection;

  if (player === "rock" && computer === "paper") {
    return "You lost! Computer wins.";
  } else if (player === "rock" && computer === "scissors") {
    return "You won! Congratulations!";
  } else if (player === "paper" && computer === "scissors") {
    return "You lost! Computer wins.";
  } else if (player === "paper" && computer === "rock") {
    return "You won! Congratulations!";
  } else if (player === "scissors" && computer === "rock") {
    return "You lost! Computer wins.";
  } else if (player === "scissors" && computer === "paper") {
    return "You won! Congratulations!";
  } else {
    return "It's a tie!";
  }
}

function playGame() {
  let round = 0;
  var playerScore = 0;
  var computerScore = 0;
  while (round < 5) {
    const playerSelection = prompt("Your choice?: ");
    const computerSelection = getComputerChoice();
    var winner = playRound(playerSelection, computerSelection);
    if (winner == "You won! Congratulations!") {
      playerScore++;
      console.log(winner);
      console.log(`You: ${playerScore} Computer: ${computerScore}`);
    } else if (winner == "You lost! Computer wins.") {
      computerScore++;
      console.log(winner);
      console.log(`You: ${playerScore} Computer: ${computerScore}`);
    } else {
      playerScore++;
      computerScore++;
      console.log(winner);
      console.log(`You: ${playerScore} Computer: ${computerScore}`);
    }
    round++;
  }
  if (playerScore > computerScore) {
    console.log(`Total score ${playerScore} out of 5. You are the winner!`);
  } else if (playerScore < computerScore) {
    console.log(`Total score is ${playerScore} out of 5. Computer wins!`);
  } else {
    console.log("Draw!");
  }
}

playGame();
