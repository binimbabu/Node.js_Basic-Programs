function removeMultipleSpaces(sentence){
    let outputArray=[];
    let array = sentence.split(" ");
    for(let i=0;i<array.length;i++){
        switch(array[i] == '' && array[i+1] == ''){
            case true:
            break;
            default: outputArray.push(array[i]);
         
        }
     
    }
    let result = outputArray.join(" ");
    return result;
}

console.log(removeMultipleSpaces("I    am    Factweavers"));

