const questions = [
  {
    question: "Do you love me ?",
    answers: [
      { text: "disagree", correct: false },
      { text: "strongly agree", correct: true },
      { text: "agree", correct: false },
      { text: "strongly disagree", correct: false }
    ]
  },
  {
    question: "Do you think i am the best?",
    answers: [
      { text: "disagree", correct: false },
      { text: "strongly agree", correct: true },
      { text: "agree", correct: false },
      { text: "strongly disagree", correct: false }
    ]
  },
  {
    question: "Do you know me ?",
    answers: [
      { text: "disagree", correct: false },
      { text: "strongly agree", correct: true },
      { text: "agree", correct: false },
      { text: "strongly disagree", correct: false }
    ]
  },
  {
    question: "Do you think i am cutiee ?",
    answers: [
      { text: "disagree", correct: false },
      { text: "strongly agree", correct: true },
      { text: "agree", correct: false },
      { text: "strongly disagree", correct: false }
    ]
  },
  
];
const quesElement = document.getElementById("question");
const ansButton = document.getElementById("ans-buttons");
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
  quesElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  })
}

function resetState() {
  nextButton.style.display = "none";
  while (ansButton.firstChild) {
    ansButton.removeChild(ansButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }
  else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(ansButton.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  quesElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
  else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
  else {
    startQuiz();
  }
})

startQuiz();