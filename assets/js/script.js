

var question = [
    {
    prompt: "What is the color of blacktop?\n (a) brown\n\(b) white\n(c)black",
    answer: "c"
},
{
    prompt: "How many states are in the United States?\n(a) 50\n\(b) 52\n(c) 50",
    answer: "c"
},
{    
    prompt: "How many seasons are there in Minnesota?\n\(a) 6\n\(b) 4\n\(c) 3",
    answer: "b"
}

var score = 0;
for(var i=0; i < question.length; i++)
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
    score++;
    alert("correct");
}   else {
    alert("WRONG!");
}
alert("you got " + score + "/"+ questions.length)

]









// countdown:
// for (var i = 1; i <= num; i++) {
//  console.log(i);
//}


// function countDown(num) {
//     for (var i = num; i > 0; i--) {
//       console.log(i);
//     }
//   }



// var arr = [3, 1, 5, 6];    the return # = 15