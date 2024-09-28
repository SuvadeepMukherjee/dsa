var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = [-1, -1];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      ans[0] = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      ans[1] = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return ans;
};
