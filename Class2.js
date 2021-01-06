Հանել կրկնվող array-ները

Solution

function removeArray(arr1, arr2){
  let newArr = [];
  arr1.reduce((previous, item) => {
    if(!newArr.includes(item)){
      newArr.push(item)
    }
  }, 0)
  arr2.reduce((previous, item) => {
    if(!newArr.includes(item)){
      newArr.push(item)
    }
  }, 0)
  return newArr;
}
console.log(removeArray([1,2,3,5], [0, 1,3,2,7,7]))