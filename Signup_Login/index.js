function signup(userName) {
  let users = ["Prachi","Sakshi","Priya"]; 

  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Successful, Please Login";
  }
}

console.log(signup("Prachi")); 
console.log(signup("Shreya")); 



function login(userName, password) {
  let users = ["Prachi","Sakshi","Priya"]; 

  if (!users.includes(userName)) {
    return "User Not Found, Please Signup";
  } else if (password !== "Name@123") {
    return "Wrong Password....";
  } else {
    return "Login Successful...";
  }
}

console.log(login("Prachi", "Name@123")); 
console.log(login("Sakshi", "name123")); 
console.log(login("Shalu", "Name@123")); 
