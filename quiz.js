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
        container.setAttribute();
        scoreTimer();
}
})