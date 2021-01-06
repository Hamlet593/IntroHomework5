Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. 
Repeat that process if needed and return the result.

Solution

function sumOfDigits(number){
  let str = number + '';
  let sum = 0;
  for(let i = 0; i < str.length; i++){
    sum += Number(str[i])
  }
  if(sum > 9){
    return sumOfDigits(sum)
  }
  return sum;
}
console.log(sumOfDigits(14))
console.log(sumOfDigits(29))
console.log(sumOfDigits(999999999999))