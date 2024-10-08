var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let n = nums.length;
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      const sumVal = nums[i] + nums[j] + nums[k];
      if (sumVal < 0) {
        j++;
      } else if (sumVal > 0) {
        k--;
      } else {
        ans.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }
  return ans;
};
