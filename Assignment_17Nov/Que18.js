if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);
// it show 20 and error:ReferenceError: x is not defined beacuse in this var is global variable but let is only can defined within the block ,or if condition true

// ----------------------------------------------------------------------
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);
// ----------------------------------------------------------------------
const students={
student:{
    detail:{
        name:"Prachi Kumari"
    }
}
}
console.log(students?.course?.coursename);