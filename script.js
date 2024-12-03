const quizData = [
  {
    question:
      "Which Bootstrap class is used to create a button with rounded corners?",
    options: ["btn-rounded", "btn-circle", "btn-pill"],
    rightAnswer: "btn-pill",
  },
  {
    question: "Which HTML5 tag is used to define navigation links?",
    options: ["<nav>", "<header>", "<footer>"],
    rightAnswer: "<nav>",
  },
  {
    question:
      "Which attribute is used to set the alternative text for an image?",
    options: ["title", "alt", "src"],
    rightAnswer: "alt",
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color"],
    rightAnswer: "color",
  },
  {
    question:
      "Which CSS property is used to set the background color of an element?",
    options: ["background-color", "color", "background"],
    rightAnswer: "background-color",
  },
  {
    question:
      "Which pseudo-class is used to style an element when the mouse hovers over it?",
    options: [":hover", ":active", ":focus"],
    rightAnswer: ":hover",
  },
  {
    question:
      "Which CSS property is used to control the transparency of an element?",
    options: ["visibility", "opacity", "filter"],
    rightAnswer: "opacity",
  },
  {
    question: "What does the 'z-index' property in CSS control?",
    options: [
      "The size of an element",
      "The stacking order of elements",
      "The visibility of an element",
    ],
    rightAnswer: "The stacking order of elements",
  },
  {
    question: "What does 'position: absolute;' do in CSS?",
    options: [
      "Positions the element relative to its parent",
      "Positions the element relative to the nearest positioned ancestor",
      "Centers the element on the page",
    ],
    rightAnswer:
      "Positions the element relative to the nearest positioned ancestor",
  },
  {
    question: "How do you hide an element but keep its space in the document?",
    options: ["display: none;", "visibility: hidden;", "opacity: 0;"],
    rightAnswer: "visibility: hidden;",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>"],
    rightAnswer: "<a>",
  },
  {
    question: "How do you align text to the center in CSS?",
    options: [
      "text-align: center;",
      "align-text: center;",
      "justify-content: center;",
    ],
    rightAnswer: "text-align: center;",
  },
  {
    question:
      "Which media query is used to apply styles for devices with a maximum width of 600px?",
    options: [
      "@media (min-width: 600px)",
      "@media (max-width: 600px)",
      "@media (width: 600px)",
    ],
    rightAnswer: "@media (max-width: 600px)",
  },
  {
    question: "What does the 'container' class in Bootstrap do?",
    options: [
      "Creates a responsive fixed-width container",
      "Adds padding to all elements",
      "Centers all text on the page",
    ],
    rightAnswer: "Creates a responsive fixed-width container",
  },
  {
    question: "How do you center a block element using Flexbox?",
    options: [
      "align-items: center;",
      "justify-content: center;",
      "align-items: center; justify-content: center;",
    ],
    rightAnswer: "align-items: center; justify-content: center;",
  },
  {
    question:
      "How do you make an element stick to the top of the page in Bootstrap?",
    options: ["position-fixed", "sticky-top", "top-fixed"],
    rightAnswer: "sticky-top",
  },
  {
    question:
      "Which CSS property is used to create a shadow around an element?",
    options: ["box-shadow", "border-shadow", "shadow"],
    rightAnswer: "box-shadow",
  },
  {
    question: "What does 'flex-wrap: wrap;' do in a flex container?",
    options: [
      "Prevents child elements from wrapping",
      "Allows child elements to wrap onto the next line",
      "Centers the child elements",
    ],
    rightAnswer: "Allows child elements to wrap onto the next line",
  },
  {
    question: "What is the purpose of the <footer> tag in HTML?",
    options: [
      "To define navigation links",
      "To group footer content such as copyright and links",
      "To add a heading at the bottom of the page",
    ],
    rightAnswer: "To group footer content such as copyright and links",
  },
  {
    question: "Which property is used to add space inside an element?",
    options: ["padding", "margin", "border"],
    rightAnswer: "padding",
  },
  {
    question:
      "How do you apply styles to screens larger than 1024px using media queries?",
    options: [
      "@media (min-width: 1024px)",
      "@media (max-width: 1024px)",
      "@media (screen-width: 1024px)",
    ],
    rightAnswer: "@media (min-width: 1024px)",
  },
  {
    question: "What is the default display value of the <div> element?",
    options: ["inline", "block", "inline-block"],
    rightAnswer: "block",
  },
  {
    question: "Which class is used to hide an element in Bootstrap?",
    options: [".hide", ".d-none", ".invisible"],
    rightAnswer: ".d-none",
  },
  {
    question: "Which media query is used to target small screens?",
    options: [
      "@media (max-width: 576px)",
      "@media (min-width: 576px)",
      "@media (small-screens)",
    ],
    rightAnswer: "@media (max-width: 576px)",
  },
  {
    question: "What is the default positioning of an HTML element in CSS?",
    options: ["static", "relative", "absolute"],
    rightAnswer: "static",
  },
];
  
  let currentStep = parseInt(localStorage.getItem("currentStep")) || 0;
  let score = parseInt(localStorage.getItem("score")) || 0;
  let answers = JSON.parse(localStorage.getItem("answers")) || [];
  
  const stepper = document.getElementById("stepper");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.querySelector(".result-container");
  const quizContainer = document.querySelector(".quiz-container");
  const scoreText = document.getElementById("score-text");
  const summaryEl = document.getElementById("summary");
  
  function loadQuestion() {
    if (currentStep >= quizData.length) {
      showSummary();
      return;
    }
  
    const { question, options } = quizData[currentStep];
    stepper.textContent = `Question ${currentStep + 1} / ${quizData.length}`;

    questionEl.textContent = question;
    optionsEl.innerHTML = "";
  
    options.forEach((option) => {
      const button = document.createElement("button");
      button.classList.add("option");
      button.textContent = option;
      button.onclick = () => {
        document
          .querySelectorAll(".option")
          .forEach((opt) => opt.classList.remove("selected"));
        button.classList.add("selected");
        nextBtn.disabled = false;
      };
      optionsEl.appendChild(button);
    });
  
    nextBtn.disabled = true;
  }
  
  function saveAnswer() {
    const selectedOption = document.querySelector(".option.selected");
    if (selectedOption) {
      const userAnswer = selectedOption.textContent;
      const isCorrect = userAnswer === quizData[currentStep].rightAnswer;
      if (isCorrect) score += 4;
      answers.push({
        question: quizData[currentStep].question,
        userAnswer,
        isCorrect,
      });
      localStorage.setItem("score", score);
      localStorage.setItem("answers", JSON.stringify(answers));
    }
  }
  
  function showSummary() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
  
    scoreText.textContent = `You scored ${score} out of ${quizData.length * 4}. ${
      score >= 80 ? "🎉 Great Job!" : "😞 Better luck next time!"
    }`;
  
    summaryEl.innerHTML = answers
      .map(
        ({ question, userAnswer, isCorrect }) =>
          `<div class="summary-item">
                <p><strong>${question}</strong></p>
                <p class="${isCorrect ? "correct" : "incorrect"}">
                  Your Answer: ${userAnswer} ${
            isCorrect ? "(Correct)" : "(Incorrect)"
          }
                </p>
                <p>Correct Answer: ${
                  quizData.find((q) => q.question === question).rightAnswer
                }</p>
              </div>`
      )
      .join("");
  }
  
  function restartQuiz() {
    localStorage.removeItem("currentStep");
    localStorage.removeItem("score");
    localStorage.removeItem("answers");
    currentStep = 0;
    score = 0;
    answers = [];
    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    loadQuestion();
  }
  
  nextBtn.addEventListener("click", () => {
    saveAnswer();
    currentStep++;
    localStorage.setItem("currentStep", currentStep);
    loadQuestion();
  });
  
  loadQuestion();