class Solution {
  linearSearch(nums, target) {
    // Your code goes here
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  }
}
