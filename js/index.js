let myWidth = document.documentElement.clientWidth;
let myHeight = document.documentElement.clientHeight;

startGame();

function startGame() {
  ball.style.top = myHeight / 2 - 60 + "px";
  ball.style.left = myWidth / 2 - 60 + "px";
}

function getPosition(event) {
  let pointTop = event.pageY;
  let pointLeft = event.pageX;

  let tmp = myHeight - pointTop;
  let temp = myWidth - pointLeft;

  if (pointTop < 100) {
    ball.style.top = 0 + "px";
  } else if (tmp < 50) {
    ball.style.top = myHeight - 115 + "px";
  } else {
    ball.style.top = pointTop - 50 + "px";
  }

  if (pointLeft < 100) {
    ball.style.left = 0 + "px";
  } else if (temp < 100) {
    ball.style.left = myWidth - 115 + "px";
  } else {
    ball.style.left = pointLeft - 50 + "px";
  }
}
