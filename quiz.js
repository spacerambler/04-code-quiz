var startBtn = document.querySelector("btn");
var container = document.querySelector(".container");

var mode = "invisible";

function buttonVisibility(){
  document.querySelector("btn").style.visibility = "hidden";
}

function containerVisibility(){
  document.querySelector("containter").style.hidden = "visible";
}

startBtn.addEventListener("click", buttonVisibility);
startBtn.addEventListener("click", containerVisibility);

//TIMER
var timerEl = document.querySelector("time")

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

//QUESTIONS
const questionEl = document.getElementsByTagName("h3");
const choices = document.querySelector("choice-container");
const choiceText = document.querySelector("choice-text");

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

  function startGame(){

  }

  function nextQuestion(){

}