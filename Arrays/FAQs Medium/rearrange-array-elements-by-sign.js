var rearrangeArray = function (nums) {
  let even = 0;
  let odd = 1;
  let ans = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans[even] = nums[i];
      even += 2;
    } else if (nums[i] < 0) {
      ans[odd] = nums[i];
      odd += 2;
    }
  }
  return ans;
};
