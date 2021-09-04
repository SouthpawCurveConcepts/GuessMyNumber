'use strict';
/* This practice code has nothing to do with the app
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

};

const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const showNumber = function () {
  document.querySelector('.number').textContent = '?';
};

const resetGuess = function () {
  document.querySelector('.guess').value = '';
};

const setBackgroundPlay = function () {
  document.querySelector('body').style.backgroundColor = '#222';
};

const setNumberPlayWidth = function () {
  document.querySelector('.number').style.width = '15rem';
};

const noGuessText = function () {
  document.querySelector('.guess').textContent = '';
};

const showSecretNumber = function () {
  document.querySelector('.number').textContent = secretNumber;
};

const resetScore = function () {
  score = 20;
};

const decreaseScore = function () {
  score--;
};

const showHighScore = function () {
  document.querySelector('.highscore').textContent = highscore;
};

const setBackgroundWin = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
};

const setNumberWinWidth = function () {
  document.querySelector('.number').style.width = '30rem';
};

const setHighScore = function () {
  highscore = score;
};

// Todo: Bottom of todo block

document.querySelector('.again').addEventListener('click', function () {
  resetScore();
  getSecretNumber();
  displayMessage('Start guessing...');
  showScore(score);
  showNumber();
  resetGuess();
  setBackgroundPlay();
  setNumberPlayWidth();

  console.log(typeof secretNumber, ', secretNumber: ' + secretNumber);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess, ', ' + guess, 'click');

  // No guess entered
  if (!guess) {
    displayMessage('No number!'); // Our sample function
    decreaseScore();
    showScore(score);
    noGuessText();

    console.log(typeof guess, guess, 'not', 'score', score);

    // Guess is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    showSecretNumber();
    showScore(score);
    setBackgroundWin();
    setNumberWinWidth();

    console.log(typeof guess, guess, 'correct', 'score', score);

    if (score > highscore) {
      setHighScore();
      showHighScore();
    }

    // Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'To low!');
      decreaseScore();
      showScore(score);

      console.log(typeof guess, guess, 'high', 'score', score);

      // Player loses game
    } else {
      displayMessage('You lost the game!');
      showScore(0);
    }
  }
});
