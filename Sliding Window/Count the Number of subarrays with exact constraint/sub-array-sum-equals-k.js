var subarraySum = function (nums, k) {
  let counts = new Map();
  counts.set(0, 1);
  let curr = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    curr += nums[i];
    ans += counts.get(curr - k) || 0;
    const count = (counts.get(curr) || 0) + 1;
    counts.set(curr, count);
  }
  return ans;
};
