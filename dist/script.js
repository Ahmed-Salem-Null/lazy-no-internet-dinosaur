setTimeout(start, 1000);

var i = 1;
var num = document.getElementById('points');

function start() {
  setInterval(increase, 1000);
}

function increase() {
    if (i < 1000) {
      i++;
      num.innerText = i;
    }
}