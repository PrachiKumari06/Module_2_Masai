let seconds = 5;

let timer = setInterval(() => {
  console.log(seconds);
  seconds--;
  if (seconds < 0) {
    clearInterval(timer);
    console.log("Countdown Complete");
  }
}, 1000);
