//variable setup
var viewHighscoresAnchor = document.getElementById("view-highscores");

var timer = "tbd";

var quiz = document.getElementById("quiz");

var currentQuestion = document.getElementById("current-question");
var option1 = document.getElementById("button1");
var option2 = document.getElementById("button2");
var option3 = document.getElementById("button3");
var option4 = document.getElementById("button4");


var startButton = document.getElementById("start-button");

// var previousButton = document.getElementById("previous");

// var nextButton = document.getElementById("next");

// var submitQuizButton = document.getElementById("submit-quiz");

var submitInitialsButton = document.getElementById("submit-initials-button");

var questionsArray = [
    {
    question: "Commonly used data types do NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts"
  }, {
    question: "The condition of an if/else statement is enclosed with _____.",
    options: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    answer: "3. parentheses" 
  }, {
    question: "Arrays in Javascript can be used to store _____.",
    options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above"
  }, {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    answer: "3. quotes" 
  }, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer: "4. console.log"
  }];

questionLog = 0;

// function currentQuestion (){
//         $("#current-question").text(questions[questionLog].question);
//         $("#button1").text(questions[questionLog].options[0]);
//         $("#button2").text(questions[questionLog].options[1]);
//         $("#button3").text(questions[questionLog].options[2]);
//         $("#button4").text(questions[questionLog].options[3]);
// }

// function startQuiz(){
//     questionLog++;
//     if(questionLog<questions.length){
//         currentQuestion();
//     } else {
//         console.log("test");
//     }
// }
var correctAnswer;
var num=0;
function populateQuestion() {
    currentQuestion.textContent = questionsArray[num].question;
    option1.textContent = questionsArray[num].options[0];
    option2.textContent = questionsArray[num].options[1];
    option3.textContent = questionsArray[num].options[2];
    option4.textContent = questionsArray[num].options[3];
    correctAnswer = questionsArray[num].answer;
  };

  quiz.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches($correctAnswer)) {
      num++;
      if (num < questionsArray.length) {
        populateQuestion();
      } else {
        isDone = true;
      }
    } else {
      timerCount = timerCount - 10;
    }
  });


 //function to show results
function showResults (){}

 //display quiz right away
//  buildQuiz();

 //on submit, show results
//  submitQuizButton.addEventListener('click', showResults);

 //listeners
 startButton.addEventListener("click", populateQuestion)

