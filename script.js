let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound (playerSelection) {
  const computerChoice = getComputerChoice();
  const resultsDiv = document.getElementById('results');

  resultsDiv.innerHTML = `you chose ${playerSelection}, <br> computer chose ${computerChoice} <br>`;

  if (playerSelection === computerChoice) {
    resultsDiv.innerHTML = "same same, it's a tie";
  
  } else if (
    (playerSelection === "rock" && computerChoice === "scissors") ||
    (playerSelection === "scissors" && computerChoice === "paper") ||
    (playerSelection === "paper" && computerChoice === "rock")

  ) {
    resultsDiv.innerHTML = `${playerSelection} beats ${computerChoice}, you win!`;
    playerScore++;

  } else {
    resultsDiv.innerHTML = `${computerChoice} beats ${playerSelection}, sorry you lose :(`;
    computerScore++;
  }

  updateScore();
}

function updateScore() {
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;

  if (playerScore >= 5) {
    announceWinner("You");
  } else if (computerScore >= 5) {
    announceWinner("Computer");
  }
}

function announceWinner(winner) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML += `<br><strong>game over! ${winner} win the match!</strong>`;

  setButtonsEnabled(false);
  
  setTimeout(() => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    resultsDiv.textContent = "another game? choose rock, paper, or scissors";
    setButtonsEnabled(true);
  }, 3000);
}

function setButtonsEnabled(enabled) {
  const buttons = document.querySelectorAll('#buttons button');
  buttons.forEach(button => {
    button.disabled = !enabled;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rock').addEventListener('click', () => playRound('rock'));
  document.getElementById('paper').addEventListener('click', () => playRound('paper'));
  document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
});