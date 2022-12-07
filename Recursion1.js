// Problem 1 -

// Write a recursive function called flatTheArray which accepts an array of arrays
// and returns a new array with all values flattened.

// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatTheArray([[1],[2],[3]]) // [1,2,3]
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

What we need:
 Base Case -
 //if no more arrays remain, return the array.
 Different Input -
//add all arrays thogether into 1 array

// edge cases:

// psuedo code:
// you have array-ception -> you want a singular array returned
// loop through main array and find all integers in arrays, and push to new array
//keep repeating until you have exhausted all options

const flatTheArray = (arr) => {
    //declare empty array 
  let = newArr = [];
    //loop through main array
  for (let i = 0; i < arr.length; i++) {
    //if that index is an array
    if (Array.isArray(arr[i])) {
        //concat this with newArr in that index
      newArr = newArr.concat(flatTheArray(arr[i]));
    } else {
        //exhausted all options....BASECASE break recursion
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(flatTheArray([1, 2, 3, [4, 5]]));
