class Solution {
  rotateArrayByOne(nums) {
    let tmp = nums[0];
    for (let i = 1; i < nums.length; i++) {
      nums[i - 1] = nums[i];
    }
    nums[nums.length - 1] = tmp;
    return nums;
  }
}
