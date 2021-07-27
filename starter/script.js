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

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    score--;
    document.querySelector('.score').textContent = score;
    console.log(typeof guess, guess, 'not', 'score', score);
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.score').textContent = score;
    console.log(typeof guess, guess, 'correct', 'score', score);
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
      console.log(typeof guess, guess, 'high', 'score', score);
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
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
