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

const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    result.textContent = playRound(button.id, getComputerChoice());
  });
});
