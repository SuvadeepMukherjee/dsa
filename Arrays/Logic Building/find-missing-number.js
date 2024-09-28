var missingNumber = function (nums) {
  const numSet = new Set(nums);
  const n = nums.length + 1;
  for (let number = 0; number < n; number++) {
    if (!numSet.has(number)) {
      return number;
    }
  }
};
