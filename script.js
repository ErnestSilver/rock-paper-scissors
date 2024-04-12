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
const div = document.querySelector("div");
const retryButton = document.getElementById("retry");
retryButton.style.visibility = "hidden";
let playerScore = 0;
let computerScore = 0;
let finalResult = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    result.textContent = playRound(button.id, getComputerChoice());
    switch (result.textContent) {
      case "You won! Congratulations!":
        playerScore += 1;
        break;

      case "You lost! Computer wins.":
        computerScore += 1;
        break;
    }

    const score = document.createElement("p");
    result.appendChild(score);
    score.textContent = `You: ${playerScore}  Computer: ${computerScore}`;
    if (playerScore === 5) {
      finalResult = "Congratulations! You are the ultimate winner!";
    } else if (computerScore === 5) {
      finalResult = "AI triumphs, humanity defeated!";
    }

    if (playerScore === 5 || computerScore === 5) {
      buttons.forEach((button) => {
        button.style.visibility = "hidden";
      });

      result.textContent = finalResult;
      retryButton.style.visibility = "visible";
    }
  });
});

retryButton.addEventListener("click", () => {
  location.reload();
});
