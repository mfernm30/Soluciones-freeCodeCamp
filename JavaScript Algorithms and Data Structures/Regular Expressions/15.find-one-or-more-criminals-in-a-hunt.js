let crowd = "P1P5P4CCCcP2P6P3";
let reCriminals = /C+/g; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);