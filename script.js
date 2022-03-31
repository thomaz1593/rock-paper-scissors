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

function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection();
    // computerPlay = computerPlay();
    let result = "";
    if (playerSelection == "rock" && computerSelection == "scissors") {
        result = 8;
        console.log("You WON! Rock beats Scissors!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result = 8;
        console.log("You WON! Paper beats Rock!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = 8;
        console.log("You WON! Scissors beats Paper!");
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        result = 9;
        console.log("DRAW GAME!")
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        result = 9;
        console.log("DRAW GAME!")
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result = 9;
        console.log("DRAW GAME!")
    } else {
        result = 7;
        console.log(`You LOOSE! ${computerSelection} beats ${playerSelection}!`);
    }
    return result;
}
const plSelection = playerSelection();
const cpSelection = computerPlay();
console.log(playRound(plSelection, cpSelection));

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//         // if (playerWin !== 5 || computerWin !== 5) {
//         //     if (result == 8) {
//         //         playerWin++;
//         //         return playerWin;
//         //     } else if (result == 7) {
//         //         computerWin++;
//         //         return computerWin;
//         //     } else {
//         //         computerWin = computerWin;
//         //         playerWin = playerWin;
//         //     }
//         // }
//     }
// }

// game();