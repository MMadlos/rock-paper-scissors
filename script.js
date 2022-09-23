// 1. Function that will randomly return either "Rock", "Paper" or "Scissors".

let options = ["Rock", "Paper", "Scissors"];
let optionsLength = options.length;

let randomIndex = () => Math.floor(Math.random() * optionsLength);

function getComputerChoice(){
    let computerChoice = options[randomIndex()];
    return console.log(computerChoice);
}

getComputerChoice(); // It works!