// 1. Function that will randomly return either "Rock", "Paper" or "Scissors".

let options = ["Rock", "Paper", "Scissors"];
let optionsLength = options.length;

let randomIndex = () => Math.floor(Math.random() * optionsLength);

function getComputerChoice(){
    return computerChoice = options[randomIndex()];
}

 // It works! console.log(getComputerChoice());

// 2. Function that plays a single round

/*

function playRound(playerSelection, computerSelection) {
    // Rock wins Scissors - Paper wins Rock - Scissors wins Paper - Tie
    if (playerSelection === "Rock" && computerSelection == "Scissors") {
        console.log("You win!");
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You win!");
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        console.log("You win!");
    } else if (playerSelection == computerSelection) {
        console.log("Tie!");
    }   else {
        console.log("You lose!");
    }
  }
   

*/

// 2.1 Function expression

let playRound = (playerSelection, computerSelection) => 
    (playerSelection == "Rock" && computerSelection == "Scissors") ? console.log("You win!")
    : (playerSelection == "Paper" && computerSelection == "Rock") ? console.log("You win!")
    : (playerSelection == "Scissors" && computerSelection == "Paper") ? console.log("You win!")
    : (playerSelection == computerSelection) ? console.log("Tie!")
    : console.log("You lose!");
   
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(`Player selection was: ${playerSelection}`);
console.log(`Computer selection was: ${computerSelection}`);
playRound(playerSelection, computerSelection);