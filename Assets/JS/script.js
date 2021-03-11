//Declared variables
var quizText = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var quizBox = document.getElementById("questionsBox");
var resultsEl = document.getElementById("result");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var introPage = document.getElementById("introBox");


var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");


// variables for the Quiz questions 
var quizQuestions = [{
    question: "1) Commonly used data types DO NOT include:",
    choiceA: "a) string",
    choiceB: "b) booleans",
    choiceC: "c) alerts",
    choiceD: "d) numbers",
    rightAnswer: "c"},
    
   {question: "2) What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"},
];


var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;

//This function generates the quiz questions and answers
function generateQuizQuestion(){

    if (currentQuestionIndex === finalQuestionIndex){
  
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
}

//This function starts the timer, hides the infoBox, & displays the first question
function startQuiz(){

    introPage.style.display = "none"; 
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
}



//Event listener to the start button 
startBtn.addEventListener("click", startQuiz);




