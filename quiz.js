var timerEl = document.getElementById("time")

timerEl = 60;

function scoreTimer(){
    var timerInterval = setInterval(function(){
        timerEl--;
        timeEl = `${timerEl} + "seconds"`

    }, 1000);
}

scoreTimer();