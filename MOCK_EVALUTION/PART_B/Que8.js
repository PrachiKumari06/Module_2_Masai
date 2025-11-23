let nums = [10, 3, 7, 20, 13, 2];
// part 1.
let square=nums.map(n=>n*n);
console.log(square);

// part 2.
let prime=nums.filter(n=>{
    if(n<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
if(n%i==0){
    return false;
}
return true;
    }
})
console.log(prime);

// part 3
let sumAll=nums.reduce((a,b)=>a+b,0);
console.log(sumAll);

// part 4
let descendingorder=nums.sort((a,b)=>b-a);
console.log(descendingorder);

