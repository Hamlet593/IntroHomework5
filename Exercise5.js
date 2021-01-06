Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

let obj1 = {
  a: "1",
  b: "2",
};
let obj2 = {
  a: "1",
  b: "2",
  c: "2",
};
let obj3 = {
  a: "1",
  b: "2",
  c: "2",
  d: "2",
};

Solution

let obj = {
  a: "1",
  b: "2",
  c: "2",
  d: "2",
};
function keyValue(obj){
  for(let key in obj){
    if(!obj.hasOwnProperty(obj[key])){
      obj[obj[key]] = key;
    }
    else{
      if(typeof obj[obj[key]] !== 'object'){
        obj[obj[key]] = [obj[obj[key]]];
      }
      obj[obj[key]].push(key)
    }
    delete obj[key];
  }
  return obj
};
console.log(keyValue(obj))