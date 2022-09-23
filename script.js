// 1. Function that will randomly return either "Rock", "Paper" or "Scissors".

function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    let optionsLength = options.length;
    let randomIndex = () => Math.floor(Math.random() * optionsLength);

    return computerChoice = options[randomIndex()];
}

 // It works! console.log(getComputerChoice());

// 2. Function that plays a single round

/*

function playRound(playerSelection, computerSelection) {
    // Rock wins Scissors - Paper wins Rock - Scissors wins Paper - Tie
    if (playerSelection === "Rock" && computerSelection == "Scissors") {
        return "You win!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You win!";
    } else if (playerSelection == computerSelection) {
        return "Tie!";
    }   else {
        return "You lose!";
    }
  }
   

*/

// 2.1 Function expression
let playRound = (playerSelection, computerSelection) => 
    (playerSelection == "Rock" && computerSelection == "Scissors") ? "You win!"
    : (playerSelection == "Paper" && computerSelection == "Rock") ? "You win!"
    : (playerSelection == "Scissors" && computerSelection == "Paper") ? "You win!"
    : (playerSelection == computerSelection) ? "Tie!"
    : "You lose!";
   
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(`Player selection was: ${playerSelection}`);
console.log(`Computer selection was: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));