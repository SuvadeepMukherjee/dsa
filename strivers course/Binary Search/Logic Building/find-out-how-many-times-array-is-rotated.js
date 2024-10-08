class Solution {
  findKRotation(arr) {
    // Code Here
    let min = Infinity;
    let index = -1;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= arr[left]) {
        if (arr[left] < min) {
          min = arr[left];
          index = left;
        }
        left = mid + 1;
      } else if (arr[right] >= arr[mid]) {
        if (arr[mid] < min) {
          index = mid;
          min = arr[mid];
        }
        right = mid - 1;
      }
    }
    return index;
  }
}
