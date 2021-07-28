'use strict';
/* This practice code has nothing to do with the app
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(typeof secretNumber, ', secretNumber: ' + secretNumber);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, ', ' + guess, 'click');

  // No guess entered
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    score--;
    document.querySelector('.score').textContent = score;
    console.log(typeof guess, guess, 'not', 'score', score);

    // Guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    console.log(typeof guess, guess, 'correct', 'score', score);

    // Guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
      console.log(typeof guess, guess, 'high', 'score', score);

      // Player loses game
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
      console.log(typeof guess, guess, 'low', 'score', score);
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
