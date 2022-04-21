let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let pScore = document.querySelector("#pScore");
let cScore = document.querySelector("#cScore");
let roundComment = document.querySelector("#roundComment");
let announceWinner = document.querySelector("#announceWinner");
let rpsButtons = document.querySelector("#rps-buttons");

// returning computer input randomly, i.e., rock, paper, or scissors.
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// playing a single round of the game.
function playRound(playerSelection, computerSelection) {
  // updating scores upon completing each round game.
  const roundComment = document.querySelector("#roundComment");

  if (playerSelection == computerSelection) {
    // case: round ties
    roundComment.textContent = `It's a tie!`;
  } else if (
    //case: computer wins the round
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    computerScore = computerScore += 1;
    cScore.textContent = computerScore;
    roundComment.textContent = `You lose!\n${computerSelection} beats ${playerSelection}.`;
    if (computerScore < 5) {
      // case: computer wins the game: option given to reset the game
    } else {
      announceWinner.innerHTML =
        "You have lost the game... try again to claim the throne! <br/><button onclick='endGame()'>Play again</button>";
      rpsButtons.style.display = "none";
    }
  } else if (
    // case: player wins the round
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore = playerScore += 1;
    pScore.textContent = playerScore;
    roundComment.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    if (playerScore < 5) {
      // case: player wins the game; option given to reset the game
    } else {
      announceWinner.innerHTML =
        'You have won the game... the throne is all yours! <br/><button onclick="endGame()">Play again</button>';
      rpsButtons.style.display = "none";
    }
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const playerOptions = [rockBtn, paperBtn, scissorsBtn];

// play a round of rock paper scissors by taking user input from the interface
function play() {
  playerOptions.forEach((option) => {
    option.addEventListener("click", function () {
      console.log(this.alt);
      const pInput = this.alt;
      const cInput = computerPlay();
      playRound(pInput, cInput);
    });
  });
}

// reset the game to start
function endGame() {
  playerScore = 0;
  computerScore = 0;
  pScore.textContent = 0;
  cScore.textContent = 0;
  roundComment.textContent = "";
  announceWinner.textContent = "";
  rpsButtons.style.display = "block";
}

play();
