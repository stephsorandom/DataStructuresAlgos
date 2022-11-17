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
1. Since Big O tells us the complexity of an algorithm, this is essential if you want to judge how your business will scale. If you have a big website and expect lots of traffic, you need to be able to handle all user request in a quick and efficient manner. Managing scalability properly will reduce server cost in the end.
2. Knowing how efficient your code will preform/process data, can help you to determine the best algorithm to use in tackling a problem, and will also help you become a better software engineer by improving your ability to refactor code and think of things on a larger scale. Thus helping us improve our coding skills. 
3. When working in a team environment you want to make sure you are using the correct types and structures to solve specific problems. During the hiring process companies use DS&A style coding exercises to test a candidates knowledge in this. 

## Problem 4

Soley depending on a time method such as performance.now(), to measure your time and space complexity is not recommended. Performance.now() is dependant on a few factors, so every one will get a slightly different result when comparing the same algorithm. Depending on your CPU, RAM, or what you have running on your computer locally can all directly affect the result of performance.now() by resulting in different run times. 

## Problem 5
    - Total Time Complexity: 
        O(1) + O(n) + O(n) + O(n^2)
    - Consolidated Time Complexity: 
        O(n^2)


## Problem 6
    - Total Time Complexity: 
        O(1) + O(n) + O(1) + O(n^3)
    - Consolidated Time Complexity: 
        O(n^3)

## Problem 7
We ignore constants when determining time complexity because constants are ignorable, at the end of it all you will always have to depend on the worst case performer. Engineers want to examine the fundamental properties of each algorithm, knowing the expected outcome of each alorithm type.  This knowledge is then used to decide which algorithm is ideal for a specific type of proble on the greater scale.

If you were working with multiple programmers from extensive backgrounds, knowing the fundamentals of each DSA type will be extremely beneficial because you do not have to worry about the technicalities such as: the amount of data being used (whether small or large), or the different programming languages that can potentially be used to write an algorithm, which can directly affect runtime and space complexity. 

Dropping the constants gives a clear answer to what Big O you will be dealing with. 

## Problem 8 
The Space Complexity of an algorithm is the total amount of space taken by the algorithm/program to full execute, with respect to the input size. 

Space Complexity is important in the real world because, you never want to execute a function or process that will exceed the amount of space the system has. 

## Problem 9
    Space Complexity of each Data Type: 
        - Boolean : Constant 
        - Undefined : Constant
        - Null : Constant
        - Numbers : Constant
        - String : Linear
        - Array : Linear
        - Object: Linear

## Problem 10
* When to use an Array:
    - When you need fast access to elements
    - Data needs to be in order

* When to use an Object: 
    - Data does not need to be in order
    - Don't need to necessarily access the elements quickly

## Problem 11
 * Object methods Time Complexity: 
    - inserting: Constant O(1)
    - removing: Constant O(1)
    - searching 1: Constant O(1) -> because hasOwnProperty
    - searching 2: Linear O(n) -> because searching for a key value
    - accessing: Constant O(1)
    - retrieving keys: Linear O(n)
    - retrieving values: Linear O(n)

## Problem 12 
 * Array methods Time Complexity: 
    - inserting 1: Linear / Constant
    - inserting 2: Linear / Constant
    - removing 1: Linear / Constant
    - removing 2: Linear / Constant
    - searching 1: Linear
    - searching 2: Linear
    - retrieving: Constant
    - method 1: 
    - method 2: 
    - method 3: 
    - method 4: 
    - method 5: 
    - method 6: 
