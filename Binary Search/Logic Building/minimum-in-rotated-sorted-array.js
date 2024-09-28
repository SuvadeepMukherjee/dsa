var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let ans = nums[left];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= nums[left]) {
      ans = Math.min(ans, nums[left]);
      left = mid + 1;
    } else if (nums[right] >= nums[mid]) {
      ans = Math.min(ans, nums[mid]);
      right = mid - 1;
    }
  }
  return ans;
};
