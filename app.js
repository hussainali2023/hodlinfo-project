function startTimer(duration, display) {
  var timer = duration,
    seconds;
  setInterval(function () {
    seconds = parseInt(timer);

    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

var countdownTimer = 60; // Set the duration of the timer in seconds
var display = document.getElementById("timer"); // Replace "timer" with the ID of the element where you want to display the timer
startTimer(countdownTimer, display);
