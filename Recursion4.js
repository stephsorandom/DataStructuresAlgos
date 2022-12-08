// example 12: collect Strings

// Write a function called collectStrings which accepts an object and returns
// an array of all the values in the object that have a typeof string

//collectStrings(obj); // ["foo", "bar", "baz"]) //recursion with helper

psuedo code:
//accepts object. returns array
//look for typeof -> string

edge case: 
// if obj is empty, return -1

function collectStrings(obj) {
  if ((obj = {})) return -1;
  //declare empty array variable
  let arr = [];
  //use for..in loop -> because object
  for (let key in obj) {
    //check the index of the obj is string
    if (typeof obj[key] === 'string') {
      //add to empty variable
      arr.push(obj[key]);
    }
  }
  return arr;
}

console.log(
  collectStrings({ a: 'foo', b: null, c: 2, d: 'bar', e: true, f: 'baz' })
);
