function getComputerChoice() {

  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound (humanChoice)
  const computerChoice = getComputerChoice();
  const resultsDiv = document.getElementById('results');

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

        //         if (humanChoice === computerChoice) {
        //             console.log("same same, it's a tie");
        //             return;
                
        //         } else if
        //             ((humanChoice === "rock" && computerChoice === "scissors") ||
        //             (humanChoice === "scissors" && computerChoice === "paper") ||
        //             (humanChoice === "paper" && computerChoice === "rock")) {

        //             humanScore++;
        //             console.log(`${humanChoice} beats ${computerChoice}, you win!`);

        //         } else {
        //             computerScore++;
        //             console.log(`${computerChoice} beats ${humanChoice}, sorry you lose :(`);
        //         }

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