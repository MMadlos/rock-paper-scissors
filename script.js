// The computer selects randomly: rock, paper o scissors.

let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let optionsLength = options.length;
    let randomIndex = () => Math.floor(Math.random() * optionsLength);

    return computerChoice = options[randomIndex()];
}

let playerScore = 0;
let computerScore = 0;
const messageWin = "You win!";
const messageTie = "Tie!";
const messageLose = "You lose!";

function game(){

    // Indica resultado de la partida y suma los puntos
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "Rock" && computerSelection == "Scissors") {
            playerScore++;
            return `${messageWin} Your score is ${playerScore}`;

        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            playerScore++;
            return `${messageWin} Your score is ${playerScore}`;

        } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
            playerScore++;
            return `${messageWin} Your score is ${playerScore}`;

        } else if (playerSelection == computerSelection) {
            return `${messageTie} Your score is ${playerScore}`;

        }   else {
            computerScore++;
            return `${messageLose} Your score is ${playerScore}`;
        }
      }

    // Genera 5 partidas
    for (let i = 0; i < 5; i++) {
        //let playerSelection = prompt("What is your choice? Rock, Paper or Scissors?", "")
        let playerSelection = "Rock";
        const computerSelection = getComputerChoice();

        console.log(`You played ${playerSelection} vs ${computerSelection}. ${playRound(playerSelection, computerSelection)}`);

     }

    console.log(`Your final score is ${playerScore} and the computer score is ${computerScore}`)

    // Resultado final de la partida
    let finalResult = 
    (playerScore > computerScore) ? console.log("You are the winner of the game")
    : (playerScore < computerScore) ? console.log("You lose the game against the computer")
    : console.log("Nor you or the computer won. Try again");
};

game();