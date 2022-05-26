const rPs = ['rock', 'paper', 'scissor'];
let userScore = 0;
let computerScore = 0;
let playerChoice;
function computerPlay() {
    return rPs[Math.floor(Math.random() * rPs.length)];
}




function playRound(playerSelection, computer = computerPlay()) {

    if (playerSelection == computer) {
        return 'Draw';
    } else if (
        (playerSelection == 'rock' && computer == 'scissor') ||
        (playerSelection == 'paper' && computer == 'rock') ||
        (playerSelection == 'scissor' && computer == 'paper')) {
        userScore++;
        return 'You win';
    } else {
        computerScore++;
        return 'You lose';
    }
}

console.log(playRound());

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playerChoice = button.getAttribute('class');
        console.log(playRound(playerChoice));
    });
})





