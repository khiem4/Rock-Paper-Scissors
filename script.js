const rPs = ['rock', 'paper', 'scissor'];
let userScore = 0;
let computerScore = 0;


function computerPlay() {
    return rPs[Math.floor(Math.random() * rPs.length)];
}

function playerPlay() {
    let playerSelection = prompt('Input here').toLowerCase();
    return playerSelection;
}



function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    if (playerSelection === computerSelection) {
        return 'Draw';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissor') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissor' && computerSelection == 'paper')) {
        userScore++;
        return 'You win';
    } else {
        computerScore++;
        return 'You lose';
    }
}


function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(playRound());
        console.log((`Player Score: ${userScore} Computer Score: ${computerScore}`));
    }
    if (userScore > computerScore) return 'Player Win';
    else if (userScore == computerScore) return 'Tie'
    else { return 'Computer Win' }

}

console.log(game());






