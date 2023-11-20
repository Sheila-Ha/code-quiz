//When the start button is pushed the timer starts.
//Once start button is clicked times stars and question is displayed.
//Once a question is answered you will go onto the next question until done.
//When a question is answered incorrectly time will be subtracted from the clock.
//When all questions are completed or timer reaches zero the challenge is over.
//Upon challenge being completed you can save your initials and score.
//Responsive for all media screen sizes



//In the document look up the following selector
var startButton = document.querySelector('#start-button');
var timerEl = document.querySelector('#countdown');
var question = document.querySelector('#question');
var answer = document.querySelector('#correct-answer');
var currentQuestion=0;
//questions, choices and answers for the quiz
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
//When the start button is pushed the timer starts.
//Once start button is clicked the question is displayed.
// add event listener to start countdown
//startButton.addEventListener('click', countdown);   - is a single function, need two functions
// on click - 3 functions happen
startButton.addEventListener('click', function(){
//on click the countdown starts
  countdown();
//on click the question is shown
  showQuestion(0);
//on click the start button is hidden
  startButton.style.display = 'none';
});
//countdown starts with x seconds
function countdown() {
//time on clock when quiz starts= time left
  var timeLeft = 5;
//timer to show time left in seconds
  timerEl.textContent = timeLeft + ' second(s) remaining';
//every x amount of time run this function
  var timeInterval = setInterval(function () {
//decrease time left by 1
    timeLeft--;
//timer writing text to say how much time is left
    timerEl.textContent = timeLeft + ' second(s) remaining';
//check if time left reaches 0
    if (timeLeft === 0) {
//clearInterval = stop timer (preventing time from running in the negative)
      clearInterval(timeInterval);
//time reaches 0 message is displayed 
      timerEl.textContent = 'Quiz Completed'
    }
//1 second = 1000 milliseconds
  }, 1000);
}

//questions start
//show current question
function showQuestion(currentQuestion) {
//question text, from question list
  question.textContent = questionsList[currentQuestion].question;
//
  var choiceList = questionsList[currentQuestion].choices;
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
//task to be performed
function checkAnswer(event){
  document.getElementById('answers').innerHTML='';
  var buttons = document.getElementsByTagName('button');
  var userAnswer=event.target.value;
  var correctAnswer = questionsList[currentQuestion].answer;

  if ( userAnswer == correctAnswer) {
    answer.textContent = 'correct';
  }
  else {
    answer.textContent = 'wrong';
  }
}


var resetQuiz = function() {

}

//task to be performed
function loadApplication() {
  document.getElementById('')
}