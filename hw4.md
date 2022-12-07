# Week 4 Assignment - Stephanie Mitchell

## Problem 1 - Recursion

```js
const flatTheArray = (arr) => {
  let = newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatTheArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(flatTheArray([1, 2, 3, [4, 5]]));
```

## Problem 2 - Recursion

```js
const capitalizeAllLetters = (array) => {
  let upper = [];

  words.forEach((word) => {
    upper.push(word.toUpperCase());
  });

  return upper;
};

console.log(capitalizeAllLetters(['stePhaniE', 'MitcHelL']));
```
