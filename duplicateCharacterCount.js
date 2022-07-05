function getFrequency(sentence){
    let freq={};
    for(var i=0;i<sentence.length;i++){
        var character = sentence.charAt(i);
        if(freq[character]){
            freq[character]++;
        }
        else{
            freq[character] = 1;
        }
    }
    return freq;
}


console.log(getFrequency('Indivisibilities'));