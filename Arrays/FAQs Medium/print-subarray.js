var maxSumArray = function (nums) {
  let max = -Infinity;
  let currSum = 0;
  let startIndex = -1;
  let endIndex = -1;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (currSum === 0) {
      start = i;
    }
    currSum += nums[i];
    if (currSum > max) {
      max = currSum;
      startIndex = start;
      endIndex = i;
    }
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return nums.slice(startIndex, endIndex + 1);
};
console.log(maxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
