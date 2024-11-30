let score = 0;
let timeLeft = 30;
let gameInterval;
let boxInterval;

function startGame() {
  score = 0;
  timeLeft = 30;

  document.getElementById("score").textContent = score;
  document.getElementById("timer").textContent = timeLeft;

  document.getElementById("moving-box").style.display = "block";
  document.getElementById("start-button").disabled = true;

  gameInterval = setInterval(updateTimer, 1000);
  boxInterval = setInterval(moveBox, 800); // Box moves every 0.8 seconds
}

function updateTimer() {
  timeLeft -= 1;
  document.getElementById("timer").textContent = timeLeft;

  if (timeLeft <= 0) {
    endGame();
  }
}

function moveBox() {
  const box = document.getElementById("moving-box");
  const gameArea = document.getElementById("game-area");

  const maxX = gameArea.clientWidth - box.clientWidth;
  const maxY = gameArea.clientHeight - box.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
}

function scorePoint() {
  score += 1;
  document.getElementById("score").textContent = score;
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(boxInterval);

  document.getElementById("moving-box").style.display = "none";
  document.getElementById("start-button").disabled = false;

  alert(`Time's up! Your final score is: ${score}`);
}
