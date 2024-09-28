class Solution {
  lowerBound(nums, x) {
    let left = 0;
    let right = nums.length - 1;
    let ans = nums.length;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] >= x) {
        ans = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  }
}
