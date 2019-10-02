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
    printMessage(
      `Remis!!! - komputer wylosował ${computerMove} a ty też ${argPlayerMove}`
    );
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage(
      `Komputer - ${argComputerMove}, Gracz - ${argPlayerMove} - Gracz wygrywa!!`
    );
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage(
      `Komputer - ${argComputerMove}, Gracz - ${argPlayerMove} - Komputer wygrywa!!`
    );
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage(
      `Komputer - ${argComputerMove}, Gracz - ${argPlayerMove} - Komputer wygrywa!!`
    );
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage(
      `Komputer - ${argComputerMove}, Gracz - ${argPlayerMove} - Gracz wygrywa!!`
    );
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage(
      `Komputer - ${argComputerMove}, Gracz - ${argPlayerMove} - Gracz wygrywa!!`
    );
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage(
      `Komputer - ${argComputerMove}, Gracz - ${argPlayerMove} - Komputer wygrywa!!`
    );
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);
console.log('Komputer wylosował: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);
console.log('Gracz wpisał: ' + playerMove);

displayResult(computerMove, playerMove);
