let sampleWord = "bana12";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/g;// Change this line                       
let result = pwRegex.test(sampleWord);
let resultMatch = sampleWord.match(pwRegex);
console.log(resultMatch);
