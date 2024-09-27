var longestConsecutive = function (nums) {
  let set = new Set(nums);

  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (set.has(curr - 1)) continue;
    let length = 1;
    while (set.has(curr + 1)) {
      curr++;
      length++;
    }
    maxLength = Math.max(length, maxLength);
  }
  return maxLength;
};
