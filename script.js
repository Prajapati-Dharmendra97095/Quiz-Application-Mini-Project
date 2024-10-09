const questions = [
  {
    question: "WHO IS THE FATHER OF HTML ?",
    answers: [
      { text: "RASMUS LERDORF", correct: false },
      { text: "TIM BERNERS-LEE", correct: true },
      { text: "BRENDAN EICH", correct: false },
      { text: "SERGEY BRIN", correct: false },
    ],
  },
  {
    question: "HTML STAND FOR ......... .",
    answers: [
      { text: "HYPERTEXT MARKUP LANGUAGE", correct: true },
      { text: "HYPERTEXT MACHINE LANGUAGE", correct: false },
      { text: "HYPERTEXT MARKING LANGUAGE", correct: false },
      { text: "HIGHTEXT MARKING LANGUAGE", correct: false },
    ],
  },
  {
    question: "WHAT IS THE CORRECT SYNTAX OF DOCTYPE IN HTML5 ?",
    answers: [
      { text: "/DOCTYPE HTML", correct: false },
      { text: "DOCTYPE HTML", correct: false },
      { text: "DOCTYPE HTML!", correct: false },
      { text: "!DOCTYPE HTML", correct: true },
    ],
  },
  {
    question:
      "WHICH OF THE FOLLOWING IS USED TO READ AN HTML PAGE AND RENDER IT ?",
    answers: [
      { text: "WEB SERVER", correct: false },
      { text: "WEB NETWORK", correct: false },
      { text: "WEB BROWSER", correct: true },
      { text: "WEB MATRIX", correct: false },
    ],
  },
  {
    question:
      "WHICH OF THE FOLLOWING TAG IS USED FOR INSERTING THE LARGEST HEADING IN HTML ?",
    answers: [
      { text: "head", correct: false },
      { text: "h1", correct: true },
      { text: "h6", correct: false },
      { text: "heading", correct: false },
    ],
  },
  {
    question: "IN WHICH PART OF THE HTML METADATA IS CONTAINED ?",
    answers: [
      { text: "HEAD TAG", correct: true },
      { text: "TITTLE TAG", correct: false },
      { text: "HTML TAG", correct: false },
      { text: "BODY TAG", correct: false },
    ],
  },
  {
    question: "WHICH ELEMENT IS USED TO GET HIGHLIGHTED TEXT IN HTML5 ?",
    answers: [
      { text: "U", correct: false },
      { text: "MARK", correct: true },
      { text: "HIGHLIGHT", correct: false },
      { text: "B", correct: false },
    ],
  },
  {
    question: "WHICH OF THE FOLLOWING IS NOT A HTML5 TAG ?",
    answers: [
      { text: "TRACK", correct: false },
      { text: "VIDEO", correct: false },
      { text: "SLIDER", correct: true },
      { text: "SOURCE", correct: false },
    ],
  },
  {
    question: "HOW DO WE WRITE COMMENTS IN HTML ?",
    answers: [
      { text: "/.......", correct: false },
      { text: "!.......", correct: true },
      { text: "/......./", correct: false },
      { text: "......../", correct: false },
    ],
  },
  {
    question:
      "WHICH OF THE FOLLOWING ELEMENTS IN HTML5 DEFINES VIDEO OR MOVIE CONTENT ?",
    answers: [
      { text: "VIDEO", correct: true },
      { text: "MOVIE", correct: false },
      { text: "AUDIO", correct: false },
      { text: "MEDIA", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your Score ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
