var findMaxConsecutiveOnes = function (nums) {
  let curr = 0;
  let left = 0;
  let ans = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) curr++;
    while (curr > 0) {
      if (nums[left] === 0) curr--;
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
