# Week Assignment 2 - Stephanie Mitchell

## Problem 1 - Multiple Pointers Pattern

```js
const subsequence = (str1, str2) => {
  let p1 = 0;
  let p2 = 0;

  while (p1 < str1.length && p2 < str2.length) {
    if (str1[p1] === str2[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  return p1 === str1.length;
};

console.log(subsequence(str1, str2));

//Test Cases:

//subsequence('hello', 'hello world') true
//subsequence('sing', 'sting') true
//subsequence('abc', 'abracadabra') true
//subsequence('abc', 'acb') false
```
## Problem 2: Sliding Window Pattern