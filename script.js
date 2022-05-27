const rPs = ['rock', 'paper', 'scissor'];
let userScore = 0;
let computerScore = 0;
let playerChoice;

const result = document.querySelector('.result')
const roundScore = document.querySelector('#round');
const comScore = document.querySelector('#score');
const uScore = document.querySelector('#score');
const game = document.querySelector('#game');


function computerPlay() {
    return rPs[Math.floor(Math.random() * rPs.length)];
}


function playRound(playerSelection, computer = computerPlay()) {
    if (playerSelection == computer) {
        uScore.textContent = 'Draw, no one win this round';
        roundScore.textContent = 'Draw';
    } else if (
        (playerSelection == 'rock' && computer == 'scissor') ||
        (playerSelection == 'paper' && computer == 'rock') ||
        (playerSelection == 'scissor' && computer == 'paper')) {
        uScore.textContent = 'Player win ' + ++userScore + ' time';
        roundScore.textContent = 'Player win this round';
    } else {
        comScore.textContent = 'Computer win ' + ++computerScore + ' time';
        roundScore.textContent = 'Computer win '
    }
    if (userScore == 5) game.textContent = 'Player win this game';
    if (computerScore == 5) game.textContent = 'Computer win this game';
}



const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playerChoice = button.getAttribute('class');
        console.log(playRound(playerChoice));
    });
});






