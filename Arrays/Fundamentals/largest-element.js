class Solution {
  largestElement(nums) {
    let largest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) {
        largest = nums[i];
      }
    }
    return largest;
  }
}
