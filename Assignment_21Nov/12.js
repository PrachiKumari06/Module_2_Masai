function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finish`);
  }, duration);
}
function message(x) {
  console.log(x);
}
timer(2000, message);
