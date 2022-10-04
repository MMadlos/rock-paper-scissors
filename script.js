
function getComputerSelection(){
    let options = ["Rock", "Paper", "Scissors"];
    let optionsLength = options.length;
    let randomIndex = () => Math.floor(Math.random() * optionsLength);
    return options[randomIndex()];
}

function playRound(playerSelection, computerSelection) {
    
    let conditionsToWin = [
        {player: "Rock", computer: "Scissors"},
        {player: "Paper",computer: "Rock"},
        {player: "Scissors",computer: "Paper"}
        ]  
    
    for(i = 0; i < conditionsToWin.length; i++){  
        if (conditionsToWin[i].player == playerSelection && conditionsToWin[i].computer == computerSelection) {
            return result = "win";

        } else if (playerSelection == computerSelection){
            return result = "tie";

        } else {
            return result = "lose";

        }; 
    }  
}

function game() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let playerSelection = button.textContent;     
            let computerSelection = getComputerSelection(); 

            playRound(playerSelection, computerSelection);    
            addScores();
            addRoundCounter();
        })
    })
}

game();

function addRoundCounter() {
    let roundNumber = document.getElementById("roundNumber");
    let roundCounter = Number(roundNumber.textContent);

    if(roundCounter < 5){    
        roundCounter++;
        roundNumber.textContent = roundCounter;            
        console.log(roundCounter);
    } else {
    console.log("Ha superado las 5 partidas");
    }
}

// Add scores

function addScores(){
    let playerNumber = document.getElementById("playerNumber");
    let computerNumber = document.getElementById("computerNumber");
    
    let playerScore = Number(playerNumber.textContent);
    let computerScore = Number(computerNumber.textContent);

    if(result == "win"){
        playerScore++
        playerNumber.textContent = playerScore;
    } else if (result == "lose"){
        computerScore++
        computerNumber.textContent = computerScore;
    } else {
        console.log("it's a tie");
    }
}

// Add winner of 5
// Cuando el contador de rondas llegue a 5
if(roundCounter == 5){}
// Evalúa quién tiene más puntos
if(playerScore > computerScore){
    console.log("You WIN!")
} else if (playerScore < computerScore) {
    console.log("You lose...");
} else {
    console.log("Tie")
}

// Si no llega a 5, permite seguir jugando