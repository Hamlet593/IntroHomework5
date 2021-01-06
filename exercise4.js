Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift()).

Solution

function rotate(arr, index){
  if(index < 0){
    index += arr.length
  }
  index--;
  let eachItem = arr.shift()
  arr.push(eachItem);
  if(index === 0){
    return arr;
  }
  return rotate(arr, index);
}
console.log(rotate(["a", "b", "c", "d", "e", "f", "g", "h"], 3))
console.log(rotate(["a", "b", "c", "d", "e", "f", "g", "h"], -2))