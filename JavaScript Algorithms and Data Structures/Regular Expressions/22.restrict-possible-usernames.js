let username = "Z97";
let userCheck = /^[a-zA-Z][a-zA-Z]+[0-9]*$|^[a-zA-Z]\d\d$/g; // Change this line
let result = userCheck.test(username);
let resultMatch = username.match(userCheck);
console.log("test: " + result);
console.log("match: " + resultMatch);