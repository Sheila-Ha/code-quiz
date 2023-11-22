//When the start button is pushed the timer starts.
//Once start button is clicked times stars and question is displayed.
//Once a question is answered you will go onto the next question until done.
//When a question is answered incorrectly time will be subtracted from the clock.
//When all questions are completed or timer reaches zero the challenge is over.
//Upon challenge being completed you can save your initials and score.
//Responsive for all media screen sizes

//In the document look up the following selector
var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector("#countdown");
var question = document.querySelector("#question");
var answer = document.querySelector("#correct-answer");
var currentQuestion = 0;
var score = document.querySelector("#score");
var answerButtons = document.getElementById("answers");
//time on clock when quiz starts= time left
var timeLeft = 30;
var timeInterval;
var instructions = document.querySelector("#instructions");
var initials = document.querySelector("#initials-box");
var userInitials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit-button");
var goBackButton = document.querySelector("#go-back");
var clearHSButton = document.querySelector("#clear-high-scores");
var scoresList = document.querySelector("#scores-list");
var scoresBox = document.querySelector("#high-scores");
var highScores = [];
//questions, choices and answers for the quiz
var questionsList = [
  {
    question:
      "As of 2022 how many MN Twins are in the Hall of Fame?",
    choices: ["40", "35", "37", "41"],
    answer: 2
  },
  {
    question: "What MN Twin leads in home runs?",
    choices: ["Mauer", "Killebrew", "Puckett", "Carew"],
    answer: 1
  },
  {
    question: "How many Twins pitchers have thrown no-hitters?",
    choices: ["12", "8", "10", "7"],
    answer: 3
  },
  {
    question: "Which MN Twin has the highest batting percentage?",
    choices: ["Knoblauch", "Carew", "Yost", "Stone"],
    answer: 1
  }
];
//When the start button is pushed the timer starts.
//Once start button is clicked the question is displayed.
//add event listener to start countdown
//startButton.addEventListener('click', countdown);   - is a single function, need two functions
//on click - 3 functions happen
startButton.addEventListener("click", function () {
  //on click the countdown starts
  countdown();
  //on click the question is shown
  showQuestion();
  //on click the start button is hidden
  startButton.style.display = "none";
  //hide instructions
  instructions.innerHTML = "";
});

var timeInterval;
//countdown starts with x seconds
function countdown() {
  //timer to show time left in seconds
  timerEl.textContent = timeLeft + " second(s) remaining";
  //every x amount of time run this function
  timeInterval = setInterval(function () {
    //decrease time left by 1
    timeLeft--;
    //timer writing text to say how much time is left
    timerEl.textContent = timeLeft + " second(s) remaining";
    //check if time left reaches 0

    if (timeLeft === 0) {
      //clearInterval = stop timer (preventing time from running in the negative)
      clearInterval(timeInterval);
      //time reaches 0 message is displayed
      timerEl.textContent = "Quiz Completed";
      //time reaches 0 answer hide
      answerButtons.innerHTML = "";
      scoreQuiz();
    }
    //1 second = 1000 milliseconds
  }, 1000);
};

//questions start
//show current question
function showQuestion() {
  //question text, from question list
  question.textContent = questionsList[currentQuestion].question;
  //choiceList(answers) to match with the questionList
  var choiceList = questionsList[currentQuestion].choices;
  //for loop, will repeat as long as i is less than then length
  for (var i = 0; i < choiceList.length; i++) {
    // 1) Create button element
    var createButton = document.createElement("button");
    // 2) Use choiceList[i]/answers as the text for the button
    createButton.innerHTML = choiceList[i];
    //setting value of the button
    createButton.value = i;
    //listening for when button is clicked - check answer
    createButton.addEventListener("click", checkAnswer);
    // 3) Add the button to choiceHtml
    document.getElementById("answers").appendChild(createButton);
    //hide displayed correct/wrong
    answer.textContent = "";
  };
};
//checking the answer the user selected(event) via click
function checkAnswer(event) {
  //removes answer buttons from HTML
  answerButtons.innerHTML = "";
  //var buttons = document.getElementsByTagName('button');
  //retrieving the value of target
  var userAnswer = event.target.value;
  //pull from questionList the correctAnswer for the current question to complete if/else
  var correctAnswer = questionsList[currentQuestion].answer;
  // if true display correct
  if (userAnswer == correctAnswer) {
    answer.textContent = "correct";
  }
  //if false display wrong and decrease time by 1000
  else {
    answer.textContent = "wrong";
    timeLeft--;
      };

  currentQuestion++;
  // 1/2 second timeout, then current question ++ and call showQuestion
  setTimeout(function () {
    if (currentQuestion > questionsList.length - 1) {
      scoreQuiz();
    } else {
      showQuestion();
    }
  // 1/2 second timer to display correct/wrong  
  }, 500);
};
//When a question is answered incorrectly time will be subtracted from the clock.
//show score when quiz is completed
//When all questions are completed or timer reaches zero the challenge is over.

function scoreQuiz() {
  clearInterval(timeInterval);
  //display none
  question.innerHTML = "";
  //display none
  answer.innerHTML = "";
  //display message when quiz is finished
  score.innerHTML = "<p>ALL DONE!!!</p><p>YOUR SCORE IS</p>" + timeLeft;
  //box to enter initials
  initials.style.display = 'block';
};
//When all questions are completed or timer reaches zero the challenge is over.
//Upon challenge being completed you can save your initials and score.
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  //disabled submit button so it does not repopulate
  submitButton.setAttribute("disabled","");
  //create user initials from submission
  var userScore = {
    initials: userInitials.value.trim(),
    score: timeLeft
  }
  //clear out user initials once submitted
  userInitials.value = "";
//load highscores before you add the next quiz result
  highScores = JSON.parse(localStorage.getItem("initials"));
  if(highScores == null){
    highScores = [];
  }
  //add user initials to highscores
  highScores.push(userScore);
  //submission to local storage
  localStorage.setItem("initials", JSON.stringify(highScores));
  loadHighScores();
});

function loadHighScores() {
  var allScores = JSON.parse(localStorage.getItem("initials"));
  // sort by score
  allScores.sort((a, b) => a.score - b.score);
  //reverse the order of scores so highest is at the top
  allScores.reverse();
  for (var i = 0; i < allScores.length; i++) {
    var li = document.createElement("li");
    //high scorers initials + their scores
    li.textContent = allScores[i].initials + " - " + allScores[i].score;
    scoresList.appendChild(li);
  }
  scoresBox.style.display = 'block';
} 
//return back to beginning of start quiz, timer resets
goBackButton.addEventListener("click", function () {
  window.location.reload();
});
//clears out high scores recorded
clearHSButton.addEventListener("click", function () {
  scoresList.innerHTML = "";
  //start over and stores new high scores
  highScores = [];
  localStorage.setItem("initials", JSON.stringify(highScores));
});

//load quiz
function loadApplication() {
  document.getElementById("");
}
