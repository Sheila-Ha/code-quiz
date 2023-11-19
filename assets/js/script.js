

//Once a question is answered you will go onto the next question until done.
//When a question is answered incorrectly time will be subtracted from the clock.
//When all questions are completed or timer reaches zero the challenge is over.
//Upon challenge being completed you can save your initials and score.
//Responsive for all media screen sizes


//When the start button is pushed the timer starts.

var startButton = document.querySelector('#start-button');

var timerEl = document.querySelector('#countdown');


// add event listener to start countdown
startButton.addEventListener( 'click', countdown);

function countdown() {
  var timeLeft = 5;
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
//questions for the quiz
var Questions = [
  {
    'question': 'Which of the following keywords is used to define a variable in Javascript?',
    'choices':['for', 'let', 'var', 'go'],
    'answer':2
  },
  {
    'question': 'Javascript is what type of language?',
    'choices':['style', 'object-oriented', 'static', 'markup'],
    'answer':1
  },
  {
    'question': 'How can a datatype be declared to be a constant type?',
    'choices':['return', 'function', 'let', 'const'],
    'answer':3
  },
  {
    'question': 'If a given property if valid, what keyword will be used?',
    'choices':['in', 'true', 'exists', 'about'],
    'answer':0
  },
];

function loadApplication() {
  document.getElementById('')
}