function getComputerChoice() {

  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound (playerSelection) {
  const computerChoice = getComputerChoice();
  const resultsDiv = document.getElementById('results');

  if (playerSelection === computerChoice) {
    resultsDiv.textContent = "same same, it's a tie";
  
  } else if (
    (playerSelection === "rock" && computerChoice === "scissors") ||
    (playerSelection === "scissors" && computerChoice === "paper") ||
    (playerSelection === "paper" && computerChoice === "rock")

  ) {
    resultsDiv.textContent = `${playerSelection} beats ${computerChoice}, you win!`;
    playerScore++;

  } else {
    resultsDiv.textContent = `${computerChoice} beats ${playerSelection}, sorry you lose :(`;
    computerScore++;
  }

  updateScore();
}

        // function getHumanChoice() {

        //     let humanChoice = prompt("make your move - rock, paper, or scissors?").toLowerCase();

        //     while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        //         humanChoice = prompt("pick again - has to be rock, paper, or scissors").toLowerCase();
        //     }

        //     return humanChoice;

        // }

        // function playGame() {        
        
        //     let humanScore = 0;
        //     let computerScore = 0;

        //     function playRound(humanChoice,computerChoice) {

                
        //     }

        //     // const gameRounds = 5;

        //     // for (let round = 1; round <= gameRounds; round++) {
        //     //     console.log (`round ${round}`);
            
        //     //     const computerChoice = getComputerChoice();
        //     //     const humanChoice = getHumanChoice();
        //     //     playRound(humanChoice, computerChoice);

        //     //     console.log(`current score - you have ${humanScore},
        //     //     the NPC has ${computerScore}`);
        //     // }

        //     if (humanScore > computerScore) {
        //         console.log(`congrats! you win - ${humanScore} to ${computerScore}`);

        //     } else if (humanScore < computerScore) {
        //         console.log(`sorry you lose :( they got you ${computerScore} to ${humanScore}`);
                
        //     } else {
        //         console.log(`it's a tie! ${humanScore} to ${computerScore}`);
        //     }

        //     }

        // playGame();

      
        document.getElementById('rock').addEventListener('click', () => playRound('rock'));
        document.getElementById('paper').addEventListener('click', () => playRound('paper'));
        document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

    </script>