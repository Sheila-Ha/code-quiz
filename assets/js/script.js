
//When the start button is pushed the timer starts.

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add () {
  seconds++;
  if (seconds >= 60) {
      seconds = 0;
      minutes++;
  }
  if (minutes >=60) {
    minutes = 0;
    hours++;
  }

  h1.textContent = (hours? (hours > 9? hours : '0' + hours) : '0')
  timer();
}
//timer function
function timer() {
  t = setTimeout(add, 1000);
}
//click start
start.onclick = function(){
  start.disabled = true;
  timer();
};
//click stop
stop.onclick = function(){
  clearTimeout(t);
  start.disabled = false;
};






//var timerEl = document.getElementById('countdown');
//var mainEl = document.getElementById('main');
//Accessing element by id
//var firstQuestion = document.getElementById('first-question-ul');
//console.log(firstQuestion)
//Setting style of element
//firstQuestion.style.color = 'green';
//firstQuestion.style.backgroundColor = 'yellow'

// var x = setInterval(second ());
// if (distance < 0) {
//   clearInterval(x);
//   document.getElementById("second").innerHTML = "EXPIRED";
// }

// const startButton = document.getElementById('start-btn')
// const questionContainerElement = document.getElementById
// ('question-container')

// startButton.addEventListener('click', startQuiz)

// function startQuiz(){
//   console.log('Started')
//   startButton.classList.add('hide')
//   questionContainerElement.classList.remove('hide')
//   setNextQuestion()
// }


// const question = [
//   {
//     question: 'If the object is a car what is a property',
//     answers: [
//       { text: 'white', correct: true },
//       { text: "start", correct: false }
//       { text: "drive", correct: false}
//       { text: "reverse", correct: false}
//     ]
//   }
// ]