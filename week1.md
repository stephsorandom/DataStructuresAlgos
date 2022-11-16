# Week Assignment 1 - Stephanie Mitchell

## Problem 1

Big O Notation is best described as: the run time and amount of memory used to execute an algorithm, by measuring the time it takes to run your algorithm as the input grows. Big O Notation calculates the worst-case scenario, which inturn, shows the scalability of your program and helps developers see where there are opportunities to grow. 

## Problem 2

### O(1) : Constant Time Complexity
Rank: 1  
* This complexity has the least amount of complexity. Run time is independant of the input size of the function.

```js
const zoo = ['lion', 'zebra', 'monkey'] 
    zoo.push('turtle');
    console.log(zoo);
```

### O(logn) : Logarithmic Time Complexity
Rank: 2 
* A function that as its input size grows, the number of operations grows slowly. This particular time complexity will start off badly, and decrease overtime. O(logn) algorithms never look at all the elements in the input. 

```js
function halfsies (x) {
    while ( x > 2) {
        x = x / 2
    }
    console.log(x)
}
```

### O(n) : Linear Time Complexity
Rank: 3
* Execution time of this function is directly proportional to its input size. Linear Time Complexity has a 1:1 relationship (data size : time complexity).  
For loops, while loops, do while loops, and foreach loops are prime examples 

```js
function addMe (x) {
    let sum = 0;
    for (let i=0; i <x; i++>) {
    sum += i;
    }
    return sum
}
```

### O(n^2) : Quadratic Time Complexity
Rank: 4
* These algorithms are algo-ceptions (like the movie), all you need is a loop within a loop.
The number of steps required is the square root of the input size. 

```js
function bubbleSort (arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=1; j <arr.length; j++) {
            if (arr[i] > arr[j]) {
                let bubs = arr[i];
                arr[i] = arr[j];
                arr[j] = bubs;
            }
        }
    }
    return arr;
}
```

### O(n!) : Factorial Time Complexity
Rank: 5
* Every addition of new input, behaves as a multiplication of each input. 
    - 3! = 3 * 2 * 1 = 6 Operations
    - 4! = 4 * 3 * 2 * 1 = 24 Operations
    - 5! = 5 * 4 * 3 * 2 * 1 = 120 Operations


## Problem 3 