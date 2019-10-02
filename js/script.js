let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = '';

if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}

let playerInput = Math.floor(
  prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
);

console.log('Komputer wylosował: ' + computerMove);

let playerMove = 'nieznany ruch';

if (playerInput == 1) {
  playerMove = 'kamień';
} else if (playerInput == 2) {
  playerMove = 'papier';
} else if (playerInput == 3) {
  playerMove = 'nożyce';
}

console.log('Gracz wpisał: ' + playerMove);

if (playerMove == 'nieznany ruch') {
  printMessage('Wpisałeś złą liczbę...');
} else if (playerMove == computerMove) {
  printMessage(
    `Remis!!! - komputer wylosował ${computerMove} a ty też ${playerMove}`
  );
} else if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage(
    `Komputer - ${computerMove}, Gracz - ${playerMove} - Gracz wygrywa!!`
  );
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage(
    `Komputer - ${computerMove}, Gracz - ${playerMove} - Komputer wygrywa!!`
  );
} else if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage(
    `Komputer - ${computerMove}, Gracz - ${playerMove} - Komputer wygrywa!!`
  );
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage(
    `Komputer - ${computerMove}, Gracz - ${playerMove} - Gracz wygrywa!!`
  );
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage(
    `Komputer - ${computerMove}, Gracz - ${playerMove} - Gracz wygrywa!!`
  );
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage(
    `Komputer - ${computerMove}, Gracz - ${playerMove} - Komputer wygrywa!!`
  );
}
