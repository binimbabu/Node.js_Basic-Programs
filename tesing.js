function moveZeroes(numberArray){
  var count=0;
  for(let i =0 ;i <numberArray.length;i++){
    if(numberArray[i] !== 0){
        numberArray[count] = numberArray[i];
        count++;
    }
  } 
  for(i=count;i<numberArray.length;i++){
    numberArray[i]=0;
} 
return numberArray;
}


array = [9,9,8,0,7,6,0,5]
console.log(moveZeroes(array));
