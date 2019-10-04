function printMessage(msg) {
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

function score(playerScore, compScore) {
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('comp-score').textContent = compScore;
}

function resetScore() {
  score(0, 0);
}

function printMoves(player, comp) {
  document.getElementById('comp-move').textContent = comp;
  document.getElementById('player-move').textContent = player;
}

function printMovesClear() {
  document.getElementById('comp-move').textContent = '';
  document.getElementById('player-move').textContent = '';
}

function printRoundNo(playerOrComp, roundScore) {
  document.getElementById(playerOrComp + '-round').textContent = roundScore;
}

function printRoundNo2(playerRound, compRound) {
  document.getElementById('player-round').textContent = playerRound;
  document.getElementById('comp-round').textContent = compRound;
}

function summary(player, playerRound, argPlayerMove, argComputerMove, score) {
  printMessage(player + ' wygrywa!!');
  printMoves(argPlayerMove, argComputerMove);
  if (score == 3) {
    printRoundNo(player, playerRound);
    printMessage(player + ' wygrywa rundę');
    resetScore();
  }
}

function bomba(playerScore, compScore) {
  if (playerScore == 3 || compScore == 3) {
    resetScore();
    playerScore = 0;
    compScore = 0;
  } else {
    score(playerScore, compScore);
  }
}
