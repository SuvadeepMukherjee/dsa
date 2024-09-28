class Solution {
  rotateArrayByOne(nums) {
    let tmp = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] = nums[i + 1];
    }
    nums[nums.length - 1] = tmp;
    return nums;
  }
}
