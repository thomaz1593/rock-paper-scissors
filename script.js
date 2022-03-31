let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let player = playerSelection();
        let computer = computerPlay();
        playRound(player, computer);
        console.log(`GAME ${i + 1} - Player Score: ${playerScore} vs. Computer Score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("PLAYER WON THE GAME!");
    } else if (computerScore > playerScore) {
        console.log("COMPUTER WON THE GAME!");
    } else {
        console.log("IT'S A DRAW!");
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You WON! Rock beats Scissors!");
        playerScore++;
        return playerScore;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("You WON! Paper beats Rock!");
        playerScore++;
        return playerScore;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("You WON! Scissors beats Paper!");
        playerScore++;
        return playerScore;
    } else if (playerChoice == computerChoice) {
        console.log(`DRAW! ${playerChoice} equals ${computerChoice}!`)
    } else {
        console.log(`You LOOSE! ${computerChoice} beats ${playerChoice}!`);
        computerScore++;
        return computerScore;
    }
}

function playerSelection(play) {
    play = prompt("Rock, Paper or Scissors?")
    let playerSign = play.toLowerCase();
    return playerSign;
}

function computerPlay() {
    let computerSign = Math.floor(Math.random() * 3 + 1);
    if (computerSign === 1) {
        computerSign = "rock";
    } else if (computerSign === 2) {
        computerSign = "paper";
    } else if (computerSign === 3) {
        computerSign = "scissors";
    }
    return computerSign;
}

game();