var timerEl = document.getElementById("time")

timerEl = 60;

function scoreTimer(){
    //interval
    var timerInterval = setInterval(function(){
        timerEl--;
        timeEl = `${timerEl} + "seconds"`

    //add if for end of timer

    }, 1000);
}

scoreTimer();

var startBtn = document.querySelector(".start-button");
var container = document.querySelector(".container");

var mode = "is-hidden";

startBtn.addEventListener("click", function(){
    if (mode === "is-hidden") {
        mode = "is-shown";
        container.nextQuestion();
        scoreTimer();
}
})

var question = document.querySelector('#question')
var choices = document.querySelector('#choices')
var currentQuestion = {}
//add the rest of these 

//UPDATE THESE
// list of all questions, choices, and answers


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

  function startGame

  function nextQuestion(){

}