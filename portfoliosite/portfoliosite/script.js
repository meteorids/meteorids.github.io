const ball = document.getElementById('circle');

function switchOn() {
  ball.style.borderRadius = '0px';
  ball.removeEventListener('click', switchOn);
  ball.addEventListener('click', switchOff);
}

function switchOff() {
  ball.style.borderRadius = '100px';
  ball.removeEventListener('click', switchOff);
  ball.addEventListener('click', switchOn);
}

ball.addEventListener('click', switchOn);