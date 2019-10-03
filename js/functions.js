function printMessage(msg) {
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

function score(player, comp) {
  document.getElementById('player-score').textContent = player;
  document.getElementById('comp-score').textContent = comp;
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
