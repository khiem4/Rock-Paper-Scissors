const rPs = ['rock', 'paper', 'scissor'];
let userScore = 1;
let computerScore = 1;
let playerChoice;

const result = document.querySelector('.result');
const comScore = document.querySelector('#score');
const uScore = document.querySelector('#score');

function computerPlay() {
    return rPs[Math.floor(Math.random() * rPs.length)];
}


function playRound(playerSelection, computer = computerPlay()) {
    if (playerSelection == computer) {
        uScore.textContent = 'Draw';
        return 'Draw';
    } else if (
        (playerSelection == 'rock' && computer == 'scissor') ||
        (playerSelection == 'paper' && computer == 'rock') ||
        (playerSelection == 'scissor' && computer == 'paper')) {
        uScore.textContent = 'Player win ' + userScore++ + ' time';
        return 'You win';
    } else {
        comScore.textContent = 'Computer win ' + computerScore++ + ' time';
        return 'You lose';
    }
}


function checkWinner() {
    if (userScore == 5) alert('Player win');
    if (computerScore == 5) alert('Computer win')
}
console.log(checkWinner());



const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playerChoice = button.getAttribute('class');
        console.log(playRound(playerChoice));
    });
});






