const username="Prachi" 
const course="Masai EmpowerHer";
console.log(`Hello ${username} , welcome to the ${course} course!`)

// ------------------------------------------------------------
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet: function () {
    console.log("Hello");
  }
};
console.log(student.name);
student.greet();
// ------------------------------------------------------------
const getFullName=(first, last)=>{
    `${first} and ${last}`
}