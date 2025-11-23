// three things to do in order
// 1. breakfast
// 2. clean kitchen
// 3. take out trash

function breakfast(){
  return new Promise((resolve,reject)=>{
 setTimeout(() => {
const breafk=true;
if(breafk){
        resolve("done with breakfast");
}
else{
    reject("not done");
}
}, 1500);
  })
}
function cleankitchen(){
  return new Promise((resolve,reject)=>{
 setTimeout(() => {
    const clean=true;
    if(clean){
            resolve("clean the kitchen");
  }
    else{
    reject("not clean");
}}, 1500);
  })
}
function takeouttrash(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
 const trash = false;
      if(trash){
        resolve("take out dustbin");
      } else {
        reject("trash not taken out");
      }  }, 500);
  })
}

breakfast().then(value=>{console.log(value); return cleankitchen() })
.then(value=>{console.log(value); return takeouttrash() })
.then(value=>{console.log(value); return console.log("done work") })
.catch(error=>console.log(error))
.finally(()=>console.log("complll"))