function getComputerSelection() {
  let options = ["Rock", "Paper", "Scissors"];
  const randomOption = Math.floor(Math.random() * options.length);

  return options[randomOption];
}

function getHumanChoice() {
  const options = document.querySelector("#options");
  const buttons = options.querySelectorAll("button");
  let humanChoice;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      humanChoice = button.textContent;
      console.log(humanChoice);
      return humanChoice;
    });
  });
}

function game() {
  const computerChoice = getComputerSelection();

  //   const result = playRound(getHumanChoice(), computerChoice);

  const options = document.querySelector("#options");
  const buttons = options.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerSelection = button.textContent;
      let computerSelection = getComputerSelection();

      playRound(playerSelection, computerSelection);
      addScores();
      addRoundCounter();

      let roundNumber = document.getElementById("roundNumber");
      let roundCounter = Number(roundNumber.textContent);

      let message = document.getElementById("message");
      message.textContent = `You played ${playerSelection} against ${computerSelection}. ${result}`;

      if (roundCounter == 5) {
        getWinnerGame();
        toggleOptionBtns();
        toggleResetBtn();
      }
    });
  });
}

game();

function playRound(playerSelection, computerSelection) {
  const conditionsToWin = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  const playerWins = conditionsToWin[playerSelection] === computerSelection;

  if (playerSelection === computerSelection) {
    return (result = "Tie");
  } else if (playerWins) {
    return (result = "Win");
  } else {
    return (result = "Lose");
  }
}

function addRoundCounter() {
  let roundNumber = document.getElementById("roundNumber");
  let roundCounter = Number(roundNumber.textContent);

  if (roundCounter < 5) {
    roundCounter++;
    roundNumber.textContent = roundCounter;
  } else {
    getWinnerGame();
  }
}

function addScores() {
  let playerNumber = document.getElementById("playerNumber");
  let computerNumber = document.getElementById("computerNumber");

  let playerScore = Number(playerNumber.textContent);
  let computerScore = Number(computerNumber.textContent);

  let message = document.getElementById("message");

  if (result == "win") {
    playerScore++;
    playerNumber.textContent = playerScore;
    return (result = "You won this round!");
  } else if (result == "lose") {
    computerScore++;
    computerNumber.textContent = computerScore;
    return (result = "You lost this round...");
  } else {
    return (result = "It's a tie.");
  }
}

function getWinnerGame() {
  let message = document.getElementById("message");

  if (playerScore > computerScore) {
    message.textContent = `YOU WON THE GAME!`;
  } else if (playerScore < computerScore) {
    message.textContent = `YOU LOST THE GAME :( TRY AGAIN!`;
  } else {
    message.textContent = `IT'S TIE`;
  }
}

function restartGame() {
  let roundNumber = document.querySelector("#roundNumber");
  let playerNumber = document.querySelector("#playerNumber");
  let computerNumber = document.querySelector("#computerNumber");

  const btnReset = document.querySelector("#reset");

  btnReset.addEventListener("click", () => {
    roundNumber.textContent = 0;
    playerNumber.textContent = 0;
    computerNumber.textContent = 0;
    message.textContent = "";
    toggleResetBtn();
    toggleOptionBtns();
  });
}

function toggleResetBtn() {
  const reset = document.querySelector("#reset");
  reset.toggleAttribute("disabled");
  restartGame();
}

function toggleOptionBtns() {
  const options = document.querySelector("#options");
  const optionButtons = options.querySelectorAll("button");

  optionButtons.forEach((button) => {
    button.toggleAttribute("disabled");
  });
}
