let playerScore = 0;
let compScore = 0;
let playerRound = 0;
let compRound = 0;
let roundNumber = 1;
let moves = ['kamień', 'papier', 'nożyce'];

function playGame(playerInput) {
  clearMessages();
  printMovesClear();

  function getMoveName(moveId) {
    let moveName =
      moveId >= 0 && moveId < moves.length ? moves[moveId] : 'nieznany ruch';
    return moveName;
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if (argPlayerMove == 'nieznany ruch') {
      printMessage('Wpisałeś złą liczbę...');
    } else if (argPlayerMove == argComputerMove) {
      printMessage(`Remis!!!`);
    } else if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage(`Gracz wygrywa!!`);
      ++playerScore;

      if (playerScore == 3) {
        playerScore = 0;
        compScore = 0;
        ++playerRound;
        printMessage(`Gracz wygrywa rundę!!`);
        roundNumberChange(++roundNumber);
      }
    } else {
      printMessage(`Komputer wygrywa!!`);
      ++compScore;

      if (compScore == 3) {
        playerScore = 0;
        compScore = 0;
        ++compRound;
        printMessage(`Komputer wygrywa rundę!!`);
        roundNumberChange(++roundNumber);
      }
    }
    printMoves(argPlayerMove, argComputerMove);
    score(playerScore, compScore);
    playersRound(playerRound, compRound);
  }

  let randomNumber = Math.floor(Math.random() * 3);

  let computerMove = getMoveName(randomNumber);
  console.log('Komputer wylosował: ' + computerMove);

  let playerMove = getMoveName(playerInput);
  console.log('Gracz wpisał: ' + playerMove);

  displayResult(computerMove, playerMove);
}

let buttons = document.getElementsByClassName('play');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    playGame(i);
    console.log(`${playerScore} : ${compScore}`);
  });
}

document.getElementById('reset').addEventListener('click', function() {
  playerScore = 0;
  compScore = 0;
  playerRound = 0;
  compRound = 0;
  roundNumber = 1;
  resetAll(playerRound, compRound, roundNumber);
});

document.getElementById('close-info').addEventListener('click', function() {
  document.getElementById('info').classList.toggle('show-hide');
});
document.getElementById('instructions').addEventListener('click', function() {
  document.getElementById('info').classList.toggle('show-hide');
});
