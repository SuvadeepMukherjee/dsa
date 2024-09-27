class Solution {
  subarraysWithXorK(nums, k) {
    let curr = 0;
    let map = new Map();
    let ans = 0;
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
      curr = curr ^ nums[i];
      ans += map.get(curr ^ k) || 0;
      const count = (map.get(curr) || 0) + 1;
      map.set(curr, count);
    }
    return ans;
  }
}
