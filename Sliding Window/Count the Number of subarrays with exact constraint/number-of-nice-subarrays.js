var numberOfSubarrays = function (nums, k) {
  let counts = new Map();
  let ans = 0;
  let curr = 0;
  counts.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) curr++;
    ans += counts.get(curr - k) || 0;
    const count = (counts.get(curr) || 0) + 1;
    counts.set(curr, count);
  }
  return ans;
};
