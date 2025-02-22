let [seconds, minutes, hours] = [0, 0, 0];
let para = document.querySelector('p');
let playBtn = document.querySelector('.play');
let resetBtn = document.querySelector('.reset');
let stopBtn = document.querySelector('.stop');
let timer = null;
let play = true;
const updateTime = () => {
  seconds++; 
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  let h = (hours < 10 ? "0" + hours : hours);
  let m = (minutes < 10 ? "0" + minutes : minutes);
  let s = (seconds < 10 ? "0" + seconds : seconds);
  para.innerHTML = `${h}:${m}:${s}`;
}

const playWatch = () => {
  if (play) {
    timer = setInterval(updateTime, 1000);
  }
  play = false;
}

const stopWatch = () => {
  if (!play) {
    clearInterval(timer);
  }
  play = true;
}

const resetTime = () => {
  if (timer != null) {
    play=!play;
  }
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  para.innerHTML = `00:00:00`;
}

playBtn.addEventListener('click', playWatch);
resetBtn.addEventListener('click',resetTime);
stopBtn.addEventListener('click',stopWatch);
