//Variable Declarations
var startBtn = $("#startBtn");
var timerEl = $("#timer");
var content = $(".content");
var questionNumber = $(".questionNumber");
var questions = $(".questions");
var displayQuestion = $(".displayQuestion");
var answerList = $("#answerList");
var highScoreList = $(".highScoreList");
var highScoreStorage = $("highScoreStorage");

var highScoreArray = [];

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
  if (timeLeft > 1) {
    timerEl.text(timeLeft);
    timeLeft--;
  } else if (timeLeft === 1) {
    timerEl.text(timeLeft);
    timeLeft--;
  } else if (timeLeft === 0 || counter === questionArray.length) {
    timerEl.text(0);
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
    displayScore();
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
  console.log("timeIsOut");
  if (timeLeft >= 0 || questionArray.length >= 0) highScoreList.createText;
  highScoreList.append(highScoreStorage);
}

function checkIfCorrect(correctAnswer) {
  return (
    questionArray[counter].answers.indexOf(correctAnswer) ===
    questionArray[counter].correctAnswer
  );
}
