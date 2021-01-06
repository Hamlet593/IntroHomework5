function duplicateArrays(arr1, arr2){
  let forLengthArr;
  let forPushArr;
  if(arr1.length < arr2.length){
    forLengthArr = arr2;
    forPushArr = arr1;
  }
  else{
    forLengthArr = arr1;
    forPushArr = arr2;
  }
  //Այսքան կտորը գրում եմ նրա համար, որպեսզի կամայական երկու array-ներից ընտրեմ ամենաերկար length ունեցող array-ը  
  //որպեսզի շատ նիշեր ունեցող array-ի length-երի քանակով ցիկլ ֆռամ ու պակաս անդամ չստուգված չմնա:
  let arrayFromDuplicates = [];
  for(let x = 0; x < forLengthArr.length; x++){
    if(forPushArr.includes(forLengthArr[x]) && !arrayFromDuplicates.includes(forLengthArr[x])){//որպեսզի միևնույն
      //կրկնվող թիվը երկու անգամ չմտնի array-ի մեջ:
      arrayFromDuplicates.push(forLengthArr[x]);
    }
  }
  return arrayFromDuplicates;
}
console.log(duplicateArrays([0,4,7,7,1,9,1,3,2],[1,2,3,5]))
console.log(duplicateArrays([4, 7, 17, 6, 9, -4],[-8, 8, 17, 4, 5, 7, 1, 2, 6]))