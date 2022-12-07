//Problem 2

// Given an array of words,
//return a new array containing each word capitalized.

let words = ['stePhaniE', 'MitcHelL'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']

//psuedo code
//capitalize using .toUpperCase()
//map through the array to return the new array all caps

const capitalizeAllLetters = (array) => {
  //declare empty array to store values
  let upper = [];

  //each element
  words.forEach((word) => {
    //push into empty array Captialized
    upper.push(word.toUpperCase());
  });
  //return array
  return upper;
};

console.log(capitalizeAllLetters(['stePhaniE', 'MitcHelL']));
