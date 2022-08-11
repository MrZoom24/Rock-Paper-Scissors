const statusEl = document.querySelector(".status");
const playerScoreEl = document.querySelector("#playerScore");
const computerScoreEl = document.querySelector("#computerScore");
const rockEl = document.querySelector("#rock");
const paperEl = document.querySelector("#paper");
const scissorEl = document.querySelector("#scissor");

let playerScore = 0;
let computerScore = 0;

function playGame() {
    const playerChoice = this.id;
    const computerChoice = getComputerChoice();

    if(playerChoice === computerChoice){
        statusEl.textContent = `Draw! You both chose ${playerChoice}`
    }else {
        if(playerChoice === "rock"){
            if(computerChoice === "scissor"){
                statusEl.textContent = `You win this round! Rock beats scissor`;
                playerScore++;
            }else {
                statusEl.textContent =  `You lose this round! Paper beats rock`;
                computerScore++;
            }
        }else if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                statusEl.textContent = "You win this round! Paper beats rock";
                playerScore++;
            }else {
                statusEl.textContent = "You lose this round! Scissor beats paper";
                computerScore++;
            }
        }else {
            if(computerChoice === "paper"){
                statusEl.textContent = "You win this round! Scissor beats paper";
                playerScore++;
            }else {
                statusEl.textContent = "You lose this round! Rock beats scissor";
                computerScore++;
            }
        }
    }

    playerScoreEl.textContent = `Your score is: ${playerScore}`;
    computerScoreEl.textContent = `Computer score is: ${computerScore}`;

    if(playerScore === 5 || computerScore === 5){
        rockEl.removeEventListener("click", playGame);
        paperEl.removeEventListener("click", playGame);
        scissorEl.removeEventListener("click", playGame);

        if(playerScore === 5){
            statusEl.innerHTML = "You win! Good job! <br> (Refresh page to play again)";
        }else {
            statusEl.innerHTML = "You lose! Better luck next time! <br> (Refresh page to play again)";
        }
    }
}

rockEl.addEventListener("click", playGame);
paperEl.addEventListener("click", playGame);
scissorEl.addEventListener("click", playGame);

function getComputerChoice() {
    const randomNum = Math.trunc(Math.random() * 3);
    const choices = ["rock", "paper", "scissor"];
    return choices[randomNum];
}
