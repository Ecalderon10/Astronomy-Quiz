const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}

const questions = [
  {
    question:
      "When thinking about space and some of the qualites it may have which one of these qualities do you think it does not have...",

    answers: ["A. Light", "B. Sound", " C. Temperature", "D. Smell"],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following planets is the hottest in our Solar System..",

    answers: ["A. Neptune", "B. Mars", " C. Venus", " D. Jupiter"],
    correctAnswer: 3,
  },
  {
    question: "How many Earths can fit into the Sun...",

    answers: [
      "A. 1.3 million ",
      "B. 1 million",
      " C. 5 million",
      "D. 10 million",
    ],
    correctAnswer: 0,
  },
  {
    question: "What color is the moon of Mars?",

    answers: ["A.Yellow", "B. Pink", " C. Blue", "D. White"],
    correctAnswer: 2,
  },
];
