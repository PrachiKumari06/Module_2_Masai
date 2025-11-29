/**
 * let v=2;
function nu(g){
    return g;
}
let r=nu(v);
console.log(r);
console.log(nu(4));
 */

// call stack exexcotion
console.log("hg");
for(let i=1;i<3000000;i++){   
}
console.log("one");
console.log("two");

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 done");
    callback();
  }, 1000);
}

step1(() => {
  step1(() => {
    step1(() => {
      console.log("All steps done");
    });
  });
});
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("An error occurred");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

console.log("Start");

setTimeout(() => {
  console.log("Task completed");
}, 1000);

console.log("End");
