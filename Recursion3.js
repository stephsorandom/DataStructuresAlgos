// example 7: factorial

// factorial(1) // 1
// factorial(2) // 2
// factorial(7) // 5040

// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
//factorial zero (0!) is always 1.

// function factorial(x) {
//   if (x == 0 || x == 1) {
//     return 1;
//   } else {
//     return factorial(x - 1) * x;
//   }
// }
// console.log(factorial(7));

function factorial(x) {
  let result = 1;
  if (x < 0) {
    return 1;
  } else {
    for (let i = 1; i <= x; i++) {
      result = result * i;
    }
  }
  return result;
}
console.log(factorial(4));
