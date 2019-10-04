let playerScore = 0;
let compScore = 0;
let playerRound = 0;
let compRound = 0;
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
      printMoves(argPlayerMove, argComputerMove);
    } else if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage(`Gracz wygrywa!!`);
      printMoves(argPlayerMove, argComputerMove);
      if (playerScore == 3) {
        playerRound += 1;
        playerScore = 0;
        compScore = 0;
        resetScore();
      } else {
        playerScore += 1;
      }
      console.log(playerRound, 'r1');
    } else {
      printMessage(`Komputer wygrywa!!`);
      printMoves(argPlayerMove, argComputerMove);
      if (compScore == 3) {
        ++compRound;
        playerScore = 0;
        compScore = 0;
        resetScore();
      } else {
        compScore += 1;
      }

      console.log(compRound, 'rr2');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3);
  let computerMove = getMoveName(randomNumber);

  let playerMove = getMoveName(playerInput);

  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(e) {
  playGame(e.target.value);
  score(playerScore, compScore);
  printRoundNo2(playerRound, compRound);
  console.log(`${playerScore} : ${compScore}`);
});

document.getElementById('play-paper').addEventListener('click', function(e) {
  playGame(e.target.value);
  score(playerScore, compScore);
  printRoundNo2(playerRound, compRound);
  console.log(`${playerScore} : ${compScore}`);
});

document.getElementById('play-scissors').addEventListener('click', function(e) {
  playGame(e.target.value);
  score(playerScore, compScore);
  printRoundNo2(playerRound, compRound);
  console.log(`${playerScore} : ${compScore}`);
});

document.getElementById('reset').addEventListener('click', function() {
  resetScore();
  clearMessages();
  printMovesClear();
  playerScore = 0;
  compScore = 0;
});
