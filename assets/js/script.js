
//Once start button is clicked times stars and question is displayed.
//Once a question is answered you will go onto the next question until done.
//When a question is answered incorrectly time will be subtracted from the clock.
//When all questions are completed or timer reaches zero the challenge is over.
//Upon challenge being completed you can save your initials and score.
//Responsive for all media screen sizes


//When the start button is pushed the timer starts.

var startButton = document.querySelector('#start-button');
var timerEl = document.querySelector('#countdown');
var question = document.querySelector('#question');
var currentQuestion=0;
//questions for the quiz
var questionsList= [
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

// add event listener to start countdown
//startButton.addEventListener('click', countdown);   - one function, need two
startButton.addEventListener('click', function(){
  countdown();
  showQuestion();
});

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
//questions start
function showQuestion() {
  question.textContent = questionsList[0].question;
  var choiceList = questionsList[0].choices;
  for (var i = 0; i < choiceList.length; i++)

  {
    // 1) Create button element
    var createButton= document.createElement('button');
    
    // 2) Use choicesList[i] as the text for the button
    createButton.innerHTML= choiceList[i];
    createButton.value=i;
    createButton.addEventListener('click', checkAnswer);
    // 3) Add the button to choiceHtml
    document.getElementById('answers').appendChild(createButton);
  }
};

function checkAnswer(event){
  var userAnswer=event.target.value;
  var choiceList = questionsList[0].choices;
  var correctAnswer = choiceList[questionsList[0].answer];
}

var resetQuiz = function() {

}


function loadApplication() {
  document.getElementById('')
}