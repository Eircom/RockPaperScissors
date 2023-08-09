const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");
const userScoreHtml = document.getElementById("userScoreHtml");
const computerScoreHtml = document.getElementById("computerScoreHtml");
const announcementsHtml = document.getElementById("announcements");
const resetButton = document.getElementById("reset");


let userChoice = "";
let userScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", function () {

  userChoice = "rock";
  playGame();

});

paperButton.addEventListener("click", function () {

  userChoice = "paper";
  playGame();

});

scissorButton.addEventListener("click", function () {

  userChoice = "scissor";
  playGame();

});

resetButton.addEventListener("click", function () {

    reset();

})

function randomNumber() {

  return Math.floor(Math.random() * 3);

}

function computerChoice() {

  const choices = ["rock", "paper", "scissor"];

  let randomChoice = choices[randomNumber()];

  return randomChoice;

}

function playGame() {

  if (userChoice === computerChoice()) {
    
    announcementsHtml.innerHTML = "Draw!"
    announcementsHtml.style.color = "grey"

  } else if (
    (userChoice === "rock" && computerChoice() === "scissor") ||
    (userChoice === "paper" && computerChoice() === "rock") ||
    (userChoice === "scissor" && computerChoice() === "paper")
  ) {
    // User wins
    userScore++;
    userScoreHtml.innerHTML = userScore;
    announcementsHtml.innerHTML = "Player wins Round!"
    announcementsHtml.style.color = "green"
  } else {
    // Computer wins
    computerScore++;
    computerScoreHtml.innerHTML = computerScore;
    announcementsHtml.innerHTML = "Computer wins Round!"
    announcementsHtml.style.color = "red"
  }

  if (userScore === 5 || computerScore === 5) {
    winner();
  }
}

//function winner() {}

function reset() {

    userScore = 0;
    computerScore = 0;

    userScoreHtml.innerHTML = userScore;
    computerScoreHtml.innerHTML = computerScore;
    announcementsHtml.innerHTML = "Select either Rock, Paper, or Scissors";
    announcementsHtml.style.color = "black";


}

