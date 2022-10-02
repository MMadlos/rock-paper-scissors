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
            console.log(playerSelection);   
            
            playRound(playerSelection, computerSelection);
        })        
    })

    function playRound(playerChoice, computerSelection) {
        
        if (playerChoice == "Rock" && computerSelection == "Scissors"){
            div.textContent = `You have selected ${playerChoice} against ${computerSelection}. YOU WON!!`
            body.appendChild(div);
        } else if (playerChoice == "Paper" && computerSelection == "Rock"){
            div.textContent = `You have selected ${playerChoice} against ${computerSelection}. YOU WON!!`
            body.appendChild(div);
        } else if (playerChoice == "Scissors" && computerSelection == "Paper"){
            div.textContent = `You have selected ${playerChoice} against ${computerSelection}. YOU WON!!`
            body.appendChild(div);
        } else if (playerChoice == computerSelection) {
            div.textContent = `You have selected ${playerChoice} against ${computerSelection}. TIE!!`
            body.appendChild(div);        
        }            
        else {
            div.textContent = `You have selected ${playerChoice} against ${computerSelection} YOU LOSE! `;
            body.appendChild(div);
        } 
    };

    
}



// Indica resultado de la partida


game();