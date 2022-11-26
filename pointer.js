//all characters in str1 must be in str2
//must be in order.

//you want to loop through str1 and str2
//match str1[i] -> str2[j]
//if it matches, you want to use next index in str1 and search str2
//continue looping until no more characters in str1

//if no match, in str2, return false

const subsequence = (str1, str2) => {
  //initialize both pointers
  let p1 = 0;
  let p2 = 0;
  //while pointers are not at the end of str length
  while (p1 < str1.length && p2 < str2.length) {
    //if both pointers match
    if (str1[p1] === str2[p2]) {
      //move both pointers to next character
      p1++;
      p2++;
    } else {
      //else if they dont match
      //move only second pointer to scout
      p2++;
    }
  }
  return p1 === str1.length;
};

console.log(subsequence('sing', 'sitng'));
