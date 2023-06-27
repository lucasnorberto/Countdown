
function countdown() {
  var targetDate = document.getElementById("targetDate").value;
  var targetTime = document.getElementById("targetTime").value;
  var now = new Date();
  var target = new Date(targetDate + " " + targetTime);
  var countdown = target - now;

  var interval = setInterval(function() {
    countdown -= 1000;

    var days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    var hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    var message = "";
    if (countdown < 0) {
      message = "EXPIRED";
    } else {
      message += days < 10 ? "0" + days : days;
      message += "d ";
      message += hours < 10 ? "0" + hours : hours;
      message += "h ";
      message += minutes < 10 ? "0" + minutes : minutes;
      message += "m ";
      message += seconds < 10 ? "0" + seconds : seconds;
      message += "s";
    }

    document.querySelector(".message").innerHTML = message;
  }, 1000);
}

window.onload = function() {
  countdown();
};