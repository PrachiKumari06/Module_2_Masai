function createCounter(){
    let count=0;
function increment() {
    count++;
    console.log(`Current count: ${count}`);
}
function decrement() {
    count--;
    console.log(`Current count: ${count}`);
}
return {
  increment,decrement  
}
}
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
// ----------------------QUE20-(2 PART)------------------------------------------------
function createBankAccount(){
    let balance=0;
 function deposit(money){
     balance+=money;
     console.log(`Deposited: ${balance}`);
 }
 function withdraw(money){
     if(money<balance){
         balance-=money;
         console.log(`Withdrawn: ${money}`);
     }
     else{
       console.log("Insufficient balance"); 
     }
 }
 return{
     deposit,withdraw
 }
}
const account = createBankAccount();
account.deposit(500); 
account.withdraw(200); 
account.withdraw(400); 
console.log(account.balance); 
