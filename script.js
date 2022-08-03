let playerScore = 0;
let opponentScore = 0;

function getComputerChoice() {
    const randomNum = Math.trunc(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNum];
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice){
        return "Draw";
    }else if (playerChoice === "rock") {
        if (computerChoice === "paper"){
            opponentScore++
            return "You lose: Paper beats Rock";
        } else {
            playerScore++
            return "You win: Rock beats Scissors";
        }
    }else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            opponentScore++
            return "You lose: Scissors beats Paper";
        } else {
            playerScore++
            return "You win: Paper beats Rock";
        }
    }else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            opponentScore++
            return "You lose: Rock beats Scissors";
        } else {
            playerScore++
            return "You win: Scissors beats Paper";
        }
    }else {
        return "Invalid choice";
    }
}

function game(){

    for(i = 0; i < 5; i++){
        console.log(playRound(prompt("Your choice:"), getComputerChoice()));
        console.log(`Your score: ${playerScore} \n Opponent score: ${opponentScore}`)
    }

    if (playerScore === opponentScore){
        console.log(`It's a draw! \n Your score: ${playerScore} \n Opponent score: ${opponentScore}`)
    } else if (playerScore > opponentScore){
        console.log(`You win! \n Your score: ${playerScore} \n Opponent score: ${opponentScore}`)
    } else {
        console.log(`You lose! \n Your score: ${playerScore} \n Opponent score: ${opponentScore}`)
    }
}

game()