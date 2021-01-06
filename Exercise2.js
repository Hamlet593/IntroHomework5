Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

Solution

function flattens(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'object') {
      newArr = newArr.concat(flattens(arr[i]))
    }
    else{
      newArr = newArr.concat(arr[i])
    }
  }
  return newArr;
}
console.log(flattens([1, [3,4, [1, 2]], 10, 25, 36]))
console.log(flattens([14, [1, [[[3, []]], 1], 0]]))