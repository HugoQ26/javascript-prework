// let playerScore = 0;
// let compScore = 0;
// let playerRound = 0;
// let compRound = 0;
// let roundNumber = 1;
// let moves = ['kamień', 'papier', 'nożyce'];

// function playGame(playerInput) {
//   clearMessages();
//   printMovesClear();

//   function getMoveName(moveId) {
//     let moveName =
//       moveId >= 0 && moveId < moves.length ? moves[moveId] : 'nieznany ruch';
//     return moveName;
//   }

//   function displayResult(argComputerMove, argPlayerMove) {
//     if (argPlayerMove == 'nieznany ruch') {
//       printMessage('Wpisałeś złą liczbę...');
//     } else if (argPlayerMove == argComputerMove) {
//       printMessage(`Remis!!!`);
//       printMoves(argPlayerMove, argComputerMove);
//     } else if (
//       (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
//       (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
//       (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
//     ) {
//       printMessage(`Gracz wygrywa!!`);
//       printMoves(argPlayerMove, argComputerMove);
//       playerScore += 1;
//       if (playerScore == 3) {
//         playerScore = 0;
//         compScore = 0;
//         playerRound += 1;
//         roundNumber += 1;
//         printMessage(`Gracz wygrywa runde!!`);
//         roundNumberChange(roundNumber);
//       }
//       score(playerScore, compScore);
//       playersRound(playerRound, compRound);
//     } else {
//       printMessage(`Gracz wygrywa!!`);
//       printMoves(argPlayerMove, argComputerMove);
//       playerScore += 1;
//       if (playerScore == 3) {
//         playerScore = 0;
//         compScore = 0;
//         playerRound += 1;
//         roundNumber += 1;
//         printMessage(`Gracz wygrywa runde!!`);
//         roundNumberChange(roundNumber);
//       }
//       score(playerScore, compScore);
//       playersRound(playerRound, compRound);
//     }
//   }

//   let randomNumber = Math.floor(Math.random() * 2);
//   let computerMove = getMoveName(randomNumber);

//   let playerMove = getMoveName(playerInput);

//   displayResult(computerMove, playerMove);
// }

// document.getElementById('play-rock').addEventListener('click', function(e) {
//   playGame(e.target.value);

//   console.log(`${playerScore} : ${compScore}`);
// });

// document.getElementById('play-paper').addEventListener('click', function(e) {
//   playGame(e.target.value);

//   console.log(`${playerScore} : ${compScore}`);
// });

// document.getElementById('play-scissors').addEventListener('click', function(e) {
//   playGame(e.target.value);

//   console.log(`${playerScore} : ${compScore}`);
// });

// document.getElementById('reset').addEventListener('click', function() {
//   resetScore();
//   clearMessages();
//   printMovesClear();
//   playerScore = 0;
//   compScore = 0;
// });

let playerScore = 0;
let compScore = 0;
let playerRound = 0;
let compRound = 0;
let roundNumber = 1;

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
      if (playerScore == 3) {
        playerScore = 0;
        compScore = 0;
        playerRound += 1;
        roundNumber += 1;
        printMessage(`Gracz wygrywa runde!!`);
        roundNumberChange(roundNumber);
      }
      score(playerScore, compScore);
      playersRound(playerRound, compRound);
    } else {
      printMessage(`Komputer wygrywa!!`);
      printMoves(argPlayerMove, argComputerMove);
      compScore += 1;
      console.log('111111');

      if (compScore == 3) {
        playerScore = 0;
        compScore = 0;
        compRound += 1;
        roundNumber += 1;
        printMessage(`Komputer wygrywa runde!!`);
        roundNumberChange(roundNumber);
      }
      score(playerScore, compScore);
      playersRound(playerRound, compRound);
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let computerMove = getMoveName(randomNumber);
  console.log('Komputer wylosował: ' + computerMove);

  let playerMove = getMoveName(playerInput);
  console.log('Gracz wpisał: ' + playerMove);

  displayResult(computerMove, playerMove);
}

let buttons = document.getElementsByClassName('play');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    playGame(i + 1);
    console.log(`${playerScore} : ${compScore}`);
  });
}

document.getElementById('reset').addEventListener('click', function() {
  resetScore();
  clearMessages();
  printMovesClear();
  playerScore = 0;
  compScore = 0;
});
