// <!-- JSON :CONVRT FROM OJ TO JSON AND VICE VERSA-->
    const user={
    name:"prachi",
    age:22,
    isStudent:true
 }
 const u=JSON.stringify(user);
 console.log(u);

//  JSON.parse() to convert json to js object
const um = `{
    "name": "p",
    "age": 22,
    "isStudent": true
}`;
console.log(JSON.parse(um));
