function addOrRemove(arr, num){
  if(arr.includes(num)){
    for(let x = 0; x < arr.length; x++){
      if(arr[x] === num){
        arr.splice(x, 1)
      }
    }
    return arr;
  }
  else{
    arr.push(num);
    return arr;
  }
}
console.log(addOrRemove([4, 5, 7], 5))
console.log(addOrRemove([6, 8, 1], 3))