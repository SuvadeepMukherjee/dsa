var findMaxAverage = function (nums, k) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }
  let avg = curr / k;
  let ans = avg;
  let index = 0;
  for (let i = k; i < nums.length; i++) {
    curr += nums[i];
    curr -= nums[index];
    index++;
    avg = curr / k;
    ans = Math.max(ans, avg);
  }
  return ans;
};
