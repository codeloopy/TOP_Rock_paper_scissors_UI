var bgColors = ["#FF48C4","#2BD1FC","#F3EA5F", "#C04DF9", "#FF3F3F", "#00F900"];
var rps = document.querySelectorAll('.rpsBtn');
var background = document.querySelector("body");
var score = document.querySelector("#message");
var userScoreBoard = document.querySelector("#userScore");
var computerScoreBoard = document.querySelector("#computerScore");

var playerScore = 0;
var computerScore = 0;


game();

function game(){
  playerSelection();
  background.style.backgroundColor = bgColors[randomNum(6)];
}

function reset(){
  userScoreBoard.textContent = "";
  computerScoreBoard.textContent = "";
}


function playerSelection(){
  for (var i = 0; i < 3; i++) {
    rps[i].addEventListener("click", function(){
      if ((playerScore + computerScore) < 5) {
        playRound(this.id, computerPlay());
        background.style.backgroundColor = bgColors[randomNum(6)];
      } else {
        if (playerScore > computerScore) {
          reset();
          score.textContent = 'GAME OVER. You Win!';
        } else {
          reset();
          score.textContent = 'Dude you suck! computer beat you';
        }
      }
    });
  }
}


function randomNum(n){
  return Math.floor(Math.random() * n);
}


function computerPlay(){
  var play = ['rock', 'paper', 'scissors'];
  var rand = play[Math.floor(Math.random() * play.length)];
  return rand;
}


function playRound(player, computer) {

  if (player == computer) {
    score.textContent = "Tied!";
  }
  if (player == "rock" && computer == "scissors") {
    userScoreBoard.textContent = "You: " + (++playerScore);
  }
  if (player == "rock" && computer == "paper") {
    computerScoreBoard.textContent = "Computer: " + (++computerScore);
  }
  if (player == "scissors" && computer == "paper") {
    userScoreBoard.textContent = "You: " + (++playerScore);
  }
  if (player == "scissors" && computer == "rock") {
    computerScoreBoard.textContent = "Computer: " + (++computerScore);
  }
  if (player == "paper" && computer == "rock") {
    userScoreBoard.textContent = "You: " + (++playerScore);
  }
  if (player == "paper" && computer == "scissors") {
    computerScoreBoard.textContent = "Computer: " + (++computerScore);
  }
}
