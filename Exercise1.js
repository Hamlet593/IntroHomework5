Given an array. Write a recursive function that removes the first element and returns the given array.
(without using arr.unshift(),assign second element to first, third element to second...)

Solution

function removeFirst(arr, i){
  arr[i] = arr[i + 1];
  i++;
  if(i < arr.length){
    return removeFirst(arr, i);
  }
  arr.pop();
  return arr;
}
console.log(removeFirst([6, 78, 'n', 0, 1], 0))
console.log(removeFirst([5], 0))
console.log(removeFirst([], 0))