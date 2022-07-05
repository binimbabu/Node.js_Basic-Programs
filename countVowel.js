function countVowel(str){

const cvowel = Array.from(str).filter(letter=>'aeiou'.includes(letter)).length;
return cvowel;
}

console.log(countVowel('abcdefghijklmnopqrstuvwxyz'));