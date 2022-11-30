<p>
  Given an array nums of size n, return the majority element. The majority
  element is the element that appears more than ⌊n / 2⌋ times. You may assume
  that the majority element always exists in the array.
  <br />
  Please solve using a linear time O(n) complexity and using the frequency
  counter pattern
</p>;

// 1. Read problem and test cases
// 2. psuedo code and write out edge cases
// 3. Ask extra clarity questions
// 4. Brute force approach

//Example 1:
Input: nums = [3, 2, 3];
Output: 3;

//psuedo code
//we want to return the integer that appears the most in the array

//edge cases
// if nums=[];
// if nums only has 1 index

//if nums is 1 index long, that is the majority
//if nums is only 2 indexes, there can't be a majority
//if nums is an empty array, no majority

//Example 2:
Input: nums = [2, 2, 1, 1, 1, 2, 2, 5, 5, 6, 5, 6, 5, 6, 5];
Output: 2;

// Constraints: n == nums.length;
// 1 <= n <= 5 * 104 - 109 <= nums[i] <= 109;
// @param {number[]} nums
// @return {number}

const solution = (nums) => {
  //edge cases
  //if array has 1 number in length, return
  //if array length is less than 3, meaning 2 in length return no majority
  //if array is empty return
  if (nums.length == 1 || nums.length < 3 || nums.length === 0) return;

  //set up frequency counter objects
  freqCount1 = {};
  //loop through array and add key value for each index.
  for (let int of nums) {
    //if index already index for the key, add 1 to it OR set it to 1
    freqCount1[int] = freqCount1[int] + 1 || 1;
  }
  //set up 2 variables, to store key and value pairs

  let maxCount = 0; //key
  let mostNum = null; //value

  //loop over all keys in the object
  for (let key in freqCount1) {
    //if key is GreaterThan the maxCount
    if (freqCount1[key] > maxCount) {
      //set the new Max Count
      maxCount = freqCount1[key];
      //set that value to that key
      mostNum = key;
    }
  }
  return mostNum;
};

console.log(solution(nums));
