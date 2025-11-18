 const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const Merge=[...arr1,...arr2];
console.log(Merge);
// ----------------------------------------------
const sum=(...nums)=>{
     let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
// ----------------------------------------------

const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const {name,address:{city,pin}}=user;
console.log(name,city,pin);