const computerChoiceDisplay = document.getElementById("computer-choice"),
  userChoiceDisplay = document.getElementById("user-choice"),
  resultDisplay = document.getElementById("result"),
  possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = " " + userChoice;
    generateComputerChoices();
    getResult();
  })
);
function generateComputerChoices() {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNum === 1) {
    computerChoice = "rock";
  } else if (randomNum === 2) {
    computerChoice = "scissors";
  } else {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = " " + computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Try more!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lost";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lost";
  }
  resultDisplay.innerHTML = " " + result;
}
