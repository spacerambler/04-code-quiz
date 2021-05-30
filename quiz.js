let scoreEl = document.querySelector('time').textContent = '60 seconds'
const timeEl = document.querySelector('time')
let timeRemaining = 60;

function scoreTimer(){
    var timerInterval = setInterval(function(){
        timeRemaining--;
        timeEl.innerText = `${timeRemaining} + "seconds"`

    }, 1000)
}

scoreTimer()