const quizData = [
    {
      question: "How do you make a flex container in CSS?",
      options: ["flex: container;", "display: flex;", "flex-box: display;"],
      rightAnswer: "display: flex;",
    },
    {
      question: "How do you create a button in Bootstrap?",
      options: [
        "<button class='btn'>",
        "<button class='button'>",
        "<button class='btn-style'>",
      ],
      rightAnswer: "<button class='btn'>",
    },
    {
      question:
        "Which property is used to create space between the border and the content of an element?",
      options: ["padding", "margin", "spacing"],
      rightAnswer: "padding",
    },
    {
      question: "Which attribute is used to open a link in a new tab?",
      options: ["target='_new'", "target='_blank'", "target='_tab'"],
      rightAnswer: "target='_blank'",
    },
    {
      question: "What is the difference between <section> and <div>?",
      options: [
        "<div> is semantic; <section> is not",
        "<section> is semantic; <div> is not",
        "<section> can only contain <div> elements",
      ],
      rightAnswer: "<section> is semantic; <div> is not",
    },
    {
      question:
        "Which CSS property is used to control the stacking order of elements?",
      options: ["z-index", "order", "stack"],
      rightAnswer: "z-index",
    },
    {
      question: "How do you center an element vertically in CSS using Flexbox?",
      options: [
        "vertical-align: middle;",
        "margin: auto;",
        "align-items: center; justify-content: center;",
      ],
      rightAnswer: "align-items: center; justify-content: center;",
    },
    {
      question: "What does the 'position: fixed;' property do?",
      options: [
        "Positions an element relative to its container",
        "Fixes an element relative to the viewport",
        "Makes an element float above all other elements",
      ],
      rightAnswer: "Fixes an element relative to the viewport",
    },
    {
      question: "Which property is used to create rounded corners?",
      options: ["corner-radius", "border-radius", "round-corner"],
      rightAnswer: "border-radius",
    },
    {
      question: "How do you create a responsive image in CSS?",
      options: [
        "position: relative; width: auto;",
        "max-width: 100%; height: auto;",
        "width: 100%; height: fixed;",
      ],
      rightAnswer: "max-width: 100%; height: auto;",
    },
    {
      question: "What is the default positioning of an HTML element in CSS?",
      options: ["static", "relative", "absolute"],
      rightAnswer: "static",
    },
    {
      question: "What does the 'overflow' property control?",
      options: [
        "Alignment of child elements",
        "Content visibility outside a container",
        "Text wrapping within an element",
      ],
      rightAnswer: "Content visibility outside a container",
    },
    {
      question: "How do you apply a CSS rule only for screens wider than 768px?",
      options: [
        "@media (max-width: 768px)",
        "@media (min-width: 768px)",
        "@screen (min-width: 768px)",
      ],
      rightAnswer: "@media (min-width: 768px)",
    },
    {
      question: "What is the purpose of the <head> tag in HTML?",
      options: [
        "Displays the main content of the page",
        "Contains metadata and links to external resources",
        "Adds a header to the page",
      ],
      rightAnswer: "Contains metadata and links to external resources",
    },
    {
      question:
        "How do you make an element's width match the parent's width in CSS?",
      options: ["width: 100%;", "width: auto;", "width: inherit;"],
      rightAnswer: "width: 100%;",
    },
    {
      question: "What is the purpose of the 'float' property in CSS?",
      options: [
        "Centers an element within its container",
        "Adds a shadow effect to an element",
        "Positions an element to the left or right within its container",
      ],
      rightAnswer:
        "Positions an element to the left or right within its container",
    },
    {
      question: "Which CSS property sets the space between table cells?",
      options: ["border-spacing", "cell-padding", "cell-spacing"],
      rightAnswer: "border-spacing",
    },
    {
      question:
        "What is the difference between 'visibility: hidden;' and 'display: none;'?",
      options: [
        "'visibility: hidden;' removes the element's space; 'display: none;' keeps it",
        "'visibility: hidden;' keeps the element's space; 'display: none;' removes it",
        "'visibility: hidden;' makes the element transparent; 'display: none;' hides it completely",
      ],
      rightAnswer:
        "'visibility: hidden;' keeps the element's space; 'display: none;' removes it",
    },
    {
      question:
        "Which class is used to align items horizontally in the center of a Bootstrap grid?",
      options: [
        "justify-content-start",
        "justify-content-center",
        "align-items-center",
      ],
      rightAnswer: "justify-content-center",
    },
    {
      question: "How do you center a block element horizontally in CSS?",
      options: ["margin: auto;", "text-align: center;", "display: center;"],
      rightAnswer: "margin: auto;",
    },
    {
      question: "How can you create a Bootstrap modal?",
      options: [
        "<div class='modal'>",
        "<div class='modal-window'>",
        "<div class='bootstrap-modal'>",
      ],
      rightAnswer: "<div class='modal'>",
    },
    {
      question:
        "What is the main class used to create a responsive grid in Bootstrap?",
      options: ["grid", "container", "row"],
      rightAnswer: "container",
    },
    {
      question: "Which CSS property is used to add shadows to an element?",
      options: ["text-shadow", "box-shadow", "shadow"],
      rightAnswer: "box-shadow",
    },
    {
      question: "Which property controls the space between the lines of text?",
      options: ["letter-spacing", "word-spacing", "line-height"],
      rightAnswer: "line-height",
    },
    {
      question: "What does 'display: inline-block;' do in CSS?",
      options: [
        "Makes an element invisible on the page",
        "Allows an element to be displayed inline, but with block-level styling",
        "Makes an element behave like a block-level element",
      ],
      rightAnswer:
        "Allows an element to be displayed inline, but with block-level styling",
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