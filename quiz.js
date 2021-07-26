//START GAME
var startBtn = document.querySelector(".btn");
var container = document.querySelector(".container");

function buttonVisibility(){
  document.querySelector(".btn").visibility = "hidden";
}

function containerVisibility(){
  document.querySelector(".container").visibility = "visible";
}

startBtn.addEventListener("click", buttonVisibility);
startBtn.addEventListener("click", containerVisibility);

startBtn.addEventListener("click", function(){
  startBtn.setAttribute("visibility", "hidden");
})


//TIMER
var timerEl = document.querySelector(".time")
//console.log(timerEl)
let timeLeft = 3;
//console.log(timerEl)
function scoreTimer(){
    //interval
    var timerInterval = setInterval(function(){
        timeLeft--;
        //console.log(timerEl)
        timerEl.textContent = `${timeLeft} seconds`
      //console.log("tick")

      //add if for end of timer

      if (timeLeft === 0){
        clearInterval(timerInterval)

      }
      //then stop


    }, 1000);
}

startBtn.addEventListener("click", scoreTimer)
startBtn.addEventListener("click", firstQuestion)

//QUESTIONS
var questionContainer = document.querySelector(".question-container")

function firstQuestion(){
  const newDiv = document.createElement('div')
  newDiv.appendChild(`<h3>Question</h3>
  <div class="choice-container">
      <p class="choice-prefix">A</p>
      <div class="choice-text" data-number="1">Answer choice</div>
  </div>
  <div class="choice-container">
      <p class="choice-prefix">B</p>
      <div class="choice-text" data-number="2">Answer choice</div>
  </div>
  <div class="choice-container">
      <p class="choice-prefix">C</p>
      <div class="choice-text" data-number="3">Answer choice</div>
  </div>
  <div class="choice-container">
      <p class="choice-prefix">D</p>
      <div class="choice-text" data-number="4">Answer choice</div>
  </div>`)
}

//CORRECT ANSWER, CLASS

//INCORRECT ANSWER, CLASS

/*
let questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];
  */
  /*
  //var availableQuestions =
  var questionsIndex = questions.length;
  currentQuestion
  questionText.innerText

  function nextQuestion(){
    questionText.append(questions[0].title)
    choiceText
}
document.querySelector(".question-container").addEventListener("click", function(event){
  console.log(this)
  console.log(event.currentTarget)
  console.log(event.target)
})
//nextQuestion();
*/
