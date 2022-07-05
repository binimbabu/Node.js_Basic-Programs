function wordCount(sentence){
    let arr = sentence.split(' ');
    return arr.filter(word=>word!='').length;
}

console.log(wordCount("I am Bini Babu"))