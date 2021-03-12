//Declared variables
var quizDiv = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var resultsEl = document.getElementById("result");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var introPage = document.getElementById("introBox");

//Variables for the questions choices
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
    
  {
    question: "2) What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    rightAnswer: "a"},
   {
    question: "3) What HTML tags are JavaScript code wrapped in?",
    choiceA: "&lt;div&gt;",
    choiceB: "&lt;link&gt;",
    choiceC: "&lt;head&gt;",
    choiceD: "&lt;script&gt;",
    correctAnswer: "d"},
  {
    question: "4) What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "Weak Winter Wind",
    choiceC: "World Wide Web",
    choiceD: "Wendy Wants Waffles",
    correctAnswer: "c"},
];


var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
//Timer 76 seconds
var timeLeft = 80;
var timerInterval;
var score = 0;
var correct;

//Holds penalty time
var timePenalty = 10;

  //Hides the quiz Div
  quizDiv.style.display = "none";

//This function generates the quiz questions and answers
function generateQuizQuestion() {
  
  if (currentQuestionIndex === finalQuestionIndex) {
  
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
  
  //displays the quiz div
  quizDiv.style.display = "block";

   }

 
//This function starts the timer, hides the infoBox, & displays the first question
function startQuiz() {
  //It hides the info box   
  introPage.style.display = "none";
  generateQuizQuestion();
  //Timer
  timerInterval = setInterval(function () {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;
    
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      // showScore();
      quizTimer.textContent = "Time's up!";

      }
    
  }, 1000);
}


//This function checks the response for each answer 
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].rightAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("Correct Answer!");
        currentQuestionIndex++;
      generateQuizQuestion();
      
     //I need to add the right answer to the score 
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
      alert("Wrong Answer!")
      //time penalty of 10 sec for each wrong answer
      timeLeft = timeLeft - timePenalty;
      currentQuestionIndex++;
      generateQuizQuestion();
        
    }
    //display in the results div that the answer is wrong.
    // else {
    //     showScore();
    // }
}

// function resetAnswers

 
//Event listener to the start button 
startBtn.addEventListener("click", startQuiz);




