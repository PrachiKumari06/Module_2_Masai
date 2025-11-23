console.log("start");
setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("end");
