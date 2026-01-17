function getComputerSelection() {
  let options = ["Rock", "Paper", "Scissors"];
  const randomOption = Math.floor(Math.random() * options.length);

  return options[randomOption];
}

function checkGameWinner() {
  let $playerNumber = document.getElementById("playerNumber");
  let $computerNumber = document.getElementById("computerNumber");

  let playerScore = Number($playerNumber.textContent);
  let computerScore = Number($computerNumber.textContent);

  if (playerScore > computerScore) {
    return "Player";
  } else if (playerScore < computerScore) {
    return "Computer";
  } else {
    return "Tie";
  }
}

function getEndGameMessage(winner) {
  const endGameMessage = {
    Player: "YOU WON THE GAME!",
    Computer: "YOU LOST THE GAME :( TRY AGAIN!",
    Tie: "THE MATCH IS TIE",
  };

  return endGameMessage[winner];
}

function playRound(playerSelection, computerSelection) {
  const conditionsToWin = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  const playerWins = conditionsToWin[playerSelection] === computerSelection;

  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerWins) {
    return "Win";
  } else {
    return "Lose";
  }
}

function addRoundCounter() {
  let roundNumber = document.getElementById("roundNumber");
  let roundCounter = Number(roundNumber.textContent);

  roundCounter++;
  roundNumber.textContent = roundCounter;
}

function addScores(result) {
  let playerNumber = document.getElementById("playerNumber");
  let computerNumber = document.getElementById("computerNumber");

  let playerScore = Number(playerNumber.textContent);
  let computerScore = Number(computerNumber.textContent);

  if (result === "Win") {
    playerScore++;
    playerNumber.textContent = playerScore;
  } else if (result === "Lose") {
    computerScore++;
    computerNumber.textContent = computerScore;
  } else {
    return;
  }
}

function getResultMessage(result) {
  const resultMessage = {
    Win: "You won this round!",
    Lose: "You lost this round",
    Tie: "It's a tie",
  };
  return resultMessage[result];
}

function showRoundMessage(playerChoice, computerChoice, resultMessage) {
  const message = document.getElementById("message");
  message.textContent = `You played ${playerChoice} against ${computerChoice}. ${resultMessage}`;
}

function game() {
  const options = document.querySelector("#options");
  const buttons = options.querySelectorAll("button");

  console.log("Fuera de buttons");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Antes de variables");
      const playerChoice = button.textContent;
      const computerChoice = getComputerSelection();

      const roundResult = playRound(playerChoice, computerChoice);
      addScores(roundResult);
      const resultMessage = getResultMessage(roundResult);
      showRoundMessage(playerChoice, computerChoice, resultMessage);
      addRoundCounter();

      const maxRounds = 5;
      let $roundNumber = document.getElementById("roundNumber");
      let roundCounter = Number($roundNumber.textContent);
      if (roundCounter === maxRounds) {
        // Get and display winner message
        const gameWinner = checkGameWinner();
        const endGameMessage = getEndGameMessage(gameWinner);
        const $message = document.getElementById("message");
        $message.textContent = endGameMessage;

        // add option buttons;
        const options = document.querySelector("#options");
        const optionButtons = options.querySelectorAll("button");

        optionButtons.forEach((button) => {
          button.setAttribute("disabled", "true");
        });

        // toggleResetBtn();
        const reset = document.querySelector("#reset");
        reset.removeAttribute("disabled");

        // Click btn reset
        reset.addEventListener("click", () => {
          optionButtons.forEach((button) => {
            button.removeAttribute("disabled");
          });

          reset.setAttribute("disabled", "true");
          resetBoardScores();
        });
      }
    });
  });
}

game();

function resetGame() {
  toggleResetBtn();
  toggleOptionBtns();

  const btnReset = document.querySelector("#reset");
  btnReset.addEventListener("click", () => {
    resetBoardScores();
    toggleOptionBtns();
    // toggleResetBtn();
  });
}

function resetBoardScores() {
  let roundNumber = document.querySelector("#roundNumber");
  let playerNumber = document.querySelector("#playerNumber");
  let computerNumber = document.querySelector("#computerNumber");

  roundNumber.textContent = 0;
  playerNumber.textContent = 0;
  computerNumber.textContent = 0;
  message.textContent = "";
}

function toggleResetBtn() {
  const reset = document.querySelector("#reset");
  reset.toggleAttribute("disabled");
  console.log(reset);
  return;
}

function toggleOptionBtns() {
  const options = document.querySelector("#options");
  const optionButtons = options.querySelectorAll("button");

  optionButtons.forEach((button) => {
    button.toggleAttribute("disabled");
  });
}
