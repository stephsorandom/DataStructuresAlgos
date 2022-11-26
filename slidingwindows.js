//find the longest sequence of characters without any duplicates

const longestSubstringInString = (str) => {
  let i = 0;
  let set = new Set();

  while (i < str.length) {
    if (!set.has(str[i])) {
      set.add(str[i]);
      i++;
    } else {
      return set.size;
    }
  }
};

console.log(longestSubstringInString('thisisawesome'));

// Test Cases:
// longestSubstringInString('') 0
// longestSubstringInString('rithmschool') 7 because of ‘rithmsc’
// longestSubstringInString('thisisawesome') 4 because of ‘this’
// longestSubstringInString('thecatinthehat') 5 because of ‘theca’
// longestSubstringInString('bbbbbb') 1 because of ‘b’
// longestSubstringInString('longestsubstring') 7 because of ‘longest’
// longestSubstringInString('thisishowwedoit') 4 because of ‘this’
