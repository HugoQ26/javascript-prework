let playerScore = 0;
let compScore = 0;

function playGame(playerInput) {
  clearMessages();
  printMovesClear();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  /*
  function displayResult(argComputerMove, argPlayerMove) {
    argPlayerMove == 'nieznany ruch'
      ? printMessage('Wpisałeś złą liczbę...')
      : argPlayerMove == argComputerMove
      ? printMessage(
          `Remis!!! - komputer wylosował ${computerMove} a ty też ${argPlayerMove}`
        )
      : (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
      ? printMessage(
          `Komputer - ${argComputerMove}, Gracz - ${argPlayerMove} - Gracz wygrywa!!`
        )
      : printMessage(
          `Komputer - ${argComputerMove}, Gracz - ${argPlayerMove} - Komputer wygrywa!!`
        );
  }
*/

  function displayResult(argComputerMove, argPlayerMove) {
    if (argPlayerMove == 'nieznany ruch') {
      printMessage('Wpisałeś złą liczbę...');
    } else if (argPlayerMove == argComputerMove) {
      printMessage(`Remis!!!`);
      printMoves(argPlayerMove, argComputerMove);
    } else if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage(`Gracz wygrywa!!`);
      printMoves(argPlayerMove, argComputerMove);
      playerScore += 1;
    } else {
      printMessage(`Komputer wygrywa!!`);
      printMoves(argPlayerMove, argComputerMove);
      compScore += 1;
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let computerMove = getMoveName(randomNumber);
  console.log('Komputer wylosował: ' + computerMove);

  let playerMove = getMoveName(playerInput);
  console.log('Gracz wpisał: ' + playerMove);

  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
  score(playerScore, compScore);
  console.log(`${playerScore} : ${compScore}`);
});

document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
  score(playerScore, compScore);
  console.log(`${playerScore} : ${compScore}`);
});

document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
  score(playerScore, compScore);
  console.log(`${playerScore} : ${compScore}`);
});

document.getElementById('reset').addEventListener('click', function() {
  resetScore();
  clearMessages();
  printMovesClear();
  playerScore = 0;
  compScore = 0;
});
