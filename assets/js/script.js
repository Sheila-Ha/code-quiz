//var timerEl = document.getElementById('countdown');
//var mainEl = document.getElementById('main');
//Accessing element by id
//var firstQuestion = document.getElementById('first-question-ul');
//console.log(firstQuestion)
//Setting style of element
//firstQuestion.style.color = 'green';
//firstQuestion.style.backgroundColor = 'yellow'

var x = setInterval(second ());
if (distance < 0) {
  clearInterval(x);
  document.getElementById("second").innerHTML = "EXPIRED";
}

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')

startButton.addEventListener('click', startQuiz)

function startQuiz(){
  console.log('Started')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}


const question = [
  {
    question: 'If the object is a car what is a property',
    answers: [
      { text: 'white', correct: true },
      { text: "start", correct: false }
      { text: "drive", correct: false}
      { text: "reverse", correct: false}
    ]
  }
]