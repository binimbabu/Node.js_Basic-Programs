let sentence = "Hello, playground";

var upperCount = sentence.match(/[A-Z]/g).length;
var lowerCount = sentence.match(/[a-z]/g).length;

console.log("Upper count", upperCount);
console.log("Lower Count", lowerCount);
