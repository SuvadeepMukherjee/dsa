var moveZeroes = function (nums) {
  //move left pointer to first 0
  let left = -1;
  for (let i = 0; i < nums.length; i++) {
    left++;
    if (nums[i] === 0) break;
  }
  if (left === -1) return;

  //left stays at left most zero , right loops through the entire array
  for (let right = left + 1; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
};
