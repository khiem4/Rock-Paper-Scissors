'user stict';

///Step 1:
///Start with a function called computerPlay can randomly return R-P-S
///Use the function to make the computer's play
///use console to make sure it returning the expected output

const rPs = ['Rock', 'Paper', 'Scissor'];

function computerPlay() {
    return console.log(rPs[Math.floor(Math.random() * rPs.length)]);
}
computerPlay();




