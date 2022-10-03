
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
            return console.log(`You played ${playerSelection} and the computer played ${computerSelection}`)

        } else if (playerSelection == computerSelection){
            return console.log(`You played ${playerSelection} and the computer played ${computerSelection}`)  

        } else {
            return console.log(`You played ${playerSelection} and the computer played ${computerSelection}`) 

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
            addCounter();
            
        })
    })
}

game();


function addCounter() {
    let roundNumber = document.getElementById("roundNumber");
    let roundCounter = Number(roundNumber.textContent);

    if(roundCounter < 5){    
        roundCounter++;
        roundNumber.textContent = roundCounter;            
        console.log(roundCounter);
    }
    return console.log("Ha superado las 5 paridas");
}

