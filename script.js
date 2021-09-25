//variable setup
var viewHighscoresAnchor = Document.getElementById("view-highscores");

var timer = "tbd";

var startButton = Document.getElementById("start-button");

var previousButton = Document.getElementById("previous");

var nextButton = Document.getElementById("next");

var submitQuizButton = Document.getElementById("submit-quiz");

var submitInitialsButton = Document.getElementById("submit-initials-button");

var questions = [
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

  //need a function that starts the quiz - maybe starting quiz and calling array is 1


  //need a function that calls questions array, scores choices

  
  //need a function that starts timer & counts down & subtracts time for wrong questions so it probably needs to call the scoring function, I wonder if scoring function should be separate from questions array? 

  //need to store inputs from score and log with initials into a record, sort high score view by highest records 