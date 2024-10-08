var maxSubArray = function (nums) {
  let max = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > max) {
      max = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return max;
};
