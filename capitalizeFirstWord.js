function capitalisedWords(sentance){
    let arrWords = sentance.split(' ');
    let arrCapitalisedWords = arrWords.map( word => word[0].toUpperCase() + word.slice(1));
    let capitalisedSentence = arrCapitalisedWords.join('');
    return capitalisedSentence;
}

let sentance = "i am a developer";
console.log(capitalisedWords(sentance));