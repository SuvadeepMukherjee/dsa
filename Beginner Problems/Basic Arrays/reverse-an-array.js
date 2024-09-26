class Solution {
  reverse(arr, n) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
      left++;
      right--;
    }
  }
}
