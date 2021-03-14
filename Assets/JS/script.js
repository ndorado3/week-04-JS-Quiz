//Declared variables
var quizDiv = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var resultsEl = document.getElementById("result");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var introPage = document.getElementById("introBox");
var gameOverDiv = document.getElementById("gameOver");
var finalScoreEl = document.getElementById("finalScore");
var highscoreDiv = document.getElementById("highScoreCard");
var highScoreContainer = document.getElementById("highScoreContainer");
var submitScoreBtn = document.getElementById("submitScorebtn");
var highScoreDiv = document.getElementById("highScoreCard");
var initials = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var highscoreDisplayScore = document.getElementById("highscore-score");

//Variables for the questions choices
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// variables for the Quiz questions
var quizQuestions = [
  {
    question: "1) Commonly used data types DO NOT include:",
    choiceA: "a) string",
    choiceB: "b) booleans",
    choiceC: "c) alerts",
    choiceD: "d) numbers",
    rightAnswer: "c",
  },

  {
    question: "2) What does DOM stand for?",
    choiceA: "a) Document Object Model",
    choiceB: "b) Display Object Management",
    choiceC: "c) Digital Ordinance Model",
    choiceD: "d) Desktop Oriented Mode",
    rightAnswer: "a",
  },
  {
    question: "3) What HTML tags are JavaScript code wrapped in?",
    choiceA: "a) &lt;div&gt;",
    choiceB: "b) &lt;link&gt;",
    choiceC: "c) &lt;head&gt;",
    choiceD: "d) &lt;script&gt;",
    correctAnswer: "d",
  },
  {
    question: "4) What does WWW stand for?",
    choiceA: "a) Web World Workings",
    choiceB: "b) Weak Winter Wind",
    choiceC: "c) World Wide Web",
    choiceD: "d) Wendy Wants Waffles",
    correctAnswer: "c",
  },
];

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 80;
var timerInterval;
var score = 0;
var correct;

//Holds penalty time
var timePenalty = 10;

//Hides the quiz Div & high score div
quizDiv.style.display = "none";
highScoreContainer.style.display = "none";

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
    //this if statemnt end the quiz when the timer=0
    if (timeLeft <= 0) {
      //call the gameover function
      gameOver();
      //hide the quiz section
      quizDiv.style.display = "none";
    }
  }, 1000);
}

//This function checks the response for each answer
function checkAnswer(answer) {
  correct = quizQuestions[currentQuestionIndex].rightAnswer;
  console.log(correct, answer, currentQuestionIndex);

  if (answer === correct) {
    score++;
    alert("Correct Answer!");
  } else {
    alert("Wrong Answer!");
    //time penalty of 10 sec for each wrong answer
    timeLeft = timeLeft - timePenalty;
  }

  //goes to the next question
  currentQuestionIndex++;
  //this is statemant ends the quiz & takes the user to the final score block
  if (currentQuestionIndex === quizQuestions.length) {
    gameOver();
    //hides the quiz
    quizDiv.style.display = "none";
  } else {
    generateQuizQuestion();
  }
}

//This function displays the final score = time remainig
function gameOver() {
  quizTimer.textContent = "Time's up!";
  gameOverDiv.classList.remove("hide");
  clearInterval(timerInterval);
  if (timeLeft >= 0) {
    finalScoreEl.innerHTML = "";
    var timeRemaining = timeLeft;
    finalScoreEl.textContent = "Your final score is: " + timeRemaining;
    quizDiv.style.display = "none";
  }





  submitScoreBtn.addEventListener("click", highScore);

  function highScore() {
    if (initials.value === "") {
      alert("Must input your initials!");
      return;
    } else {
      var savedHighscores =
        JSON.parse(localStorage.getItem("savedHighscores")) || [];
      var currentUser = initials.value.trim();
      var currentHighscore = {
        name: currentUser,
        score: score
      };

      gameOverDiv.style.display = "none";
      highScoreContainer.style.display = "block";

      savedHighscores.push(currentHighscore);
      localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
      generateHighscores();
    }
  }

  function generateHighscores() {
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";

    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i = 0; i < highscores.length; i++) {
      var newNameSpan = document.createElement("li");
      var newScoreSpan = document.createElement("li");
      newNameSpan.textContent = highscores[i].name;
      newScoreSpan.textContent = highscores[i].score;
      highscoreDisplayName.appendChild(newNameSpan);
      highscoreDisplayScore.appendChild(newScoreSpan);
    }
  }
  function scoreClear(){
    window.localStorage.clear();
    // highscoreDisplayName.textContent = "";
    // highscoreDisplayScore.textContent = "";
}
function showHighscore() {
  startQuizDiv.style.display = "none"
  gameoverDiv.style.display = "none";
  highscoreContainer.style.display = "flex";
  generateHighscores();

}
function replayQuiz(){
  highscoreContainer.style.display = "none";
  gameoverDiv.style.display = "none";
  startQuizDiv.style.display = "flex";
  timeLeft = 78;
  score = 0;
  currentQuestionIndex = 0;
}

}

//Event listener to the start button
startBtn.addEventListener("click", startQuiz);
