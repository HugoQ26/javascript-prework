let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = '';

if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}

printMessage('Ruch komputera to : ' + computerMove);
