function convertSnakeToCamelCase(sentence){
    let inputArray = sentence.split("_");
    let outputarray = inputArray.map(el=>{
        let word = el.split('');
        word[0] =  word[0].toUpperCase();
        let updatedCamelCase = word.join('');
        return updatedCamelCase;
    })
    let camelCaseResult = outputarray.join('');
    return camelCaseResult;
}

console.log(convertSnakeToCamelCase("geeks_for_geeks"));