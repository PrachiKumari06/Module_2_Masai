function createWallet(){
    let balance=0;
    return {
        addMoney(amount){
            balance=balance+amount;
        },
       checkBalance(){
        console.log(balance);
       } 
    }
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance(); 
