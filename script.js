function game() {
    // Computer selection

    function getComputerChoice(){
        let options = ["Rock", "Paper", "Scissors"];
        let optionsLength = options.length;

        let randomIndex = () => Math.floor(Math.random() * optionsLength);
        return computerChoice = options[randomIndex()];
    }

    // Player selection

    const div = document.querySelector("div");
    const body = document.querySelector("body");
    const buttons = document.querySelectorAll("button");


    buttons.forEach((button) => {
        
        button.addEventListener("click", () => {
            const playerSelection = button.textContent;
            let computerSelection = getComputerChoice();
            
            
            playRound(playerSelection, computerSelection);
        })        
    })

    // Playround

    function playRound(playerSelection, computerSelection){
                
        let playerWin = [
            {playerChoice: "Rock", computerSelection: "Scissors"},
            {playerChoice: "Paper",computerSelection: "Rock"},
            {playerChoice: "Scissors",computerSelection: "Paper"}
        ]

        const optionMessage = `You have selected ${playerSelection} against ${computerSelection}.`
        const winMessage = `YOU WON!!`;
        const tieMessage = `TIE!!`;
        const loseMessage = `YOU LOSE!`;

        for (i = 0; i < playerWin.length; i++){
            if (playerWin[i].playerChoice == playerSelection && playerWin[i].computerSelection == computerSelection) {
                div.textContent = optionMessage + winMessage;
                return body.appendChild(div);

            } else if (playerSelection == computerSelection){
                div.textContent = optionMessage + tieMessage;
                return body.appendChild(div);
            }
            div.textContent = optionMessage + loseMessage;
            return body.appendChild(div);
        }
    }    
}

// Indica resultado de la partida


game();

