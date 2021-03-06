//Variable Declarations
var startBtn = $("#startBtn");
var timerEl = $("#timer");
var content = $(".content");
var questionNumber = $(".questionNumber");
var questions = $(".questions");
var displayQuestion = $(".displayQuestion");
var answerList = $("#answerList");
var highScoreStorage = $("highScoreStorage");
var highScore = $(".highScore");
var highScoreArray = [];

var highScoreList = document.getElementById("highScoreList");
var userName = document.getElementById("username");
var highScoreBtn = document.getElementById("highScoreBtn");
var highScoreList = JSON.parse(localStorage.getItem("highScoreList")) || [];
console.log(highScoreList);

var timeInitial = 100;
var timeLeft = timeInitial;
var counter = 0;
var userScoreCorrect = 0;
var userScoreIncorrect = 0;
var resultsDisplayed = false;
var questionArray = [
  {
    question:
      "When thinking about space and some of the qualites it may have which one of these qualities do you think it does not have...",

    answers: ["A. Light", "B. Sound", "C. Temperature", "D. Smell"],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following planets is the hottest in our Solar System..",

    answers: ["A. Neptune", "B. Mars", "C. Venus", " D. Jupiter"],
    correctAnswer: 2,
  },
  {
    question: "How many Earths can fit into the Sun...",

    answers: [
      "A. 1.3 million ",
      "B. 1 million",
      "C. 5 million",
      "D. 10 million",
    ],
    correctAnswer: 0,
  },
  {
    question: "What color is the moon of Mars?",

    answers: ["A.Yellow", "B. Pink", "C. Blue", "D. White"],
    correctAnswer: 2,
  },
];

var numberOfQuestions = questionArray.length;
startBtn.on("click", startTimer);

function startTimer() {
  startBtn.remove();
  showNext();
}
var timeInterval = setInterval(function () {
  timeLeft--;
  timerEl.text(timeLeft);
  if (timeLeft === 0 || counter === questionArray.length) {
    clearInterval(timeInterval);
    timeIsOut();
  }
}, 1000);

function showNext() {
  if (counter < numberOfQuestions) {
    var displayNumber = counter + 1;
    questionNumber.text("Question #" + displayNumber);

    var currentQuestion = questionArray[counter];
    displayQuestion.text(currentQuestion.question);

    for (var i = 0; i < currentQuestion.answers.length; i++) {
      var answerLi = $(
        `<li class = "listItemQuestion"> <button>${currentQuestion.answers[i]}</button></li>`
      );
      answerList.append(answerLi);
    }
  } else {
    timeIsOut();
  }
}

answerList.on("click", "button", clickedAnswer);

function clickedAnswer() {
  const correct = checkIfCorrect($(this).text());
  if (correct !== true) {
    timeLeft -= 25;
  }
  counter++;
  answerList.children().remove();
  if (counter == questionArray.length) {
    //call the function that goes to the results
  } else {
    showNext();
  }
}

function timeIsOut() {
  console.log("Hello");
  questionNumber.text("Final Score");
  displayQuestion.remove();
  answerList.remove();
  highScore.text(timeLeft);
}

highScoreList = (e) => {
  console.log("clicked by save button");

  e.preventDefault();

  var score = {
    score: Math.floor(Math.random) * 100,
    name: userName.value,
  };
  highScore.push(score);
  highScore.sort((a, b) => b.score - a.score);
  highScore.splice(5);
  localStorage.setItem("highScore", JSON.stringify(highScore));
  console.log(highScore);
};

highScoreList.innerHtml = highScore.map((score) => {
  return '<li class = "high-score"> ${score.name} - ${score.score}</li>';
});

function checkIfCorrect(correctAnswer) {
  return (
    questionArray[counter].answers.indexOf(correctAnswer) ===
    questionArray[counter].correctAnswer
  );
}
