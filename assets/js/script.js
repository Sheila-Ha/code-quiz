
//When the start button is pushed the timer starts.
//Once a question is answered you will go onto the next question until done.
//When a question is answered incorrectly time will be subtracted from the clock.
//When all questions are completed or timer reaches zero the challenge is over.
//Upon challenge being completed you can save your initials and score.
//Responsive for all media screen sizes

var startButton = document.querySelector('#start-button');
var timeLeft = 5;
var timerEl = document.querySelector('#countdown');


// add event listener to generate questions
startButton.addEventListener( 'click', countdown);

function countdown() {
  timerEl.textContent = timeLeft + ' second(s) remaining';
  
  var timeInterval = setInterval(function () {
    timeLeft--;

    timerEl.textContent = timeLeft + ' second(s) remaining';

    if (timeLeft === 0) {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
// message displayed when time expires
function displayMessage() {
  timerEl.textContent = 'Quiz Completed'
}

var resetQuiz = function() {

}
