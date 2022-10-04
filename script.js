game();

function game() {
    const options = document.querySelector("#options");
    const buttons = options.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            
            let playerSelection = button.textContent;     
            let computerSelection = getComputerSelection();
            
            playRound(playerSelection, computerSelection);    
            addScores();
            addRoundCounter();

            let roundNumber = document.getElementById("roundNumber");
            let roundCounter = Number(roundNumber.textContent);

            if(roundCounter == 5){
                toggleOptionBtns()
                toggleResetBtn()    
            }            
        })
    })
}

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



function addRoundCounter() {
    let roundNumber = document.getElementById("roundNumber");
    let roundCounter = Number(roundNumber.textContent);

    if(roundCounter < 5){    
        roundCounter++;
        roundNumber.textContent = roundCounter;            
    } else {             
        getWinnerGame();
    }
}

function addScores(){
    let playerNumber = document.getElementById("playerNumber");
    let computerNumber = document.getElementById("computerNumber");
    
    let playerScore = Number(playerNumber.textContent);
    let computerScore = Number(computerNumber.textContent);

    if(result == "win"){
        playerScore++
        playerNumber.textContent = playerScore;
        console.log("win")
    } else if (result == "lose"){
        computerScore++
        computerNumber.textContent = computerScore;
        console.log("lose")
    } else {
        console.log("tie")
    }
}

function getWinnerGame(){
    if(playerScore > computerScore){
        console.log("You WIN!")
    } else if (playerScore < computerScore) {
        console.log("You lose...");
    } else {
        console.log("Tie")
    }

    
}

function restartGame(){
    let roundNumber = document.querySelector("#roundNumber");
    let playerNumber = document.querySelector("#playerNumber");
    let computerNumber = document.querySelector("#computerNumber");

    const btnReset = document.querySelector("#reset");     

    btnReset.addEventListener("click", () => {
        roundNumber.textContent = 0;
        playerNumber.textContent = 0;
        computerNumber.textContent = 0;
        toggleResetBtn()      
        toggleOptionBtns()

    })
}

function toggleResetBtn() {
    const reset = document.querySelector("#reset");
    reset.toggleAttribute("disabled");
    restartGame();


}

function toggleOptionBtns() {
    const options = document.querySelector("#options");
    const optionButtons = options.querySelectorAll("button");
    
    optionButtons.forEach(button => {
        button.toggleAttribute("disabled");
    })
}

