class Solution {
  rotateArrayByOne(nums) {
    function reverse(arr, start, end) {
      let left = start;
      let right = end;
      while (left < right) {
        let tmp = arr[left];
        arr[left] = arr[right];
        arr[right] = tmp;
        left++;
        right--;
      }
    }
    reverse(nums, 0, 0);
    reverse(nums, 1, nums.length - 1);
    reverse(nums, 0, nums.length - 1);
  }
}
