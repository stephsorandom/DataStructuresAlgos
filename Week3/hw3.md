# Week Assignment 3 - Stephanie Mitchell

## Problem 1 - Frequency Counter Pattern

```js
const solution = (nums) => {
  freqCount1 = {};

  if (nums.length == 1 || nums.length < 3 || nums.length === 0) return;

  for (let int of nums) {
    freqCount1[int] = freqCount1[int] + 1 || 1;
  }

    let maxCount = 0;
    let mostNum = null;
  
  for (let key in freqCount1) {
    if (freqCount1[key] > maxCount) {
      maxCount = freqCount1[key];
      mostNum = key;
    }
  }

  return mostNum;
};
```
