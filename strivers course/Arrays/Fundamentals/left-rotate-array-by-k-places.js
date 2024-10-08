class Solution {
  // Function to rotate an array by d elements in counter-clockwise direction.
  rotateArr(arr, d) {
    // code here
    function reverse(arr, first, end) {
      let start = first;
      let last = end;
      while (start < last) {
        let tmp = arr[start];
        arr[start] = arr[last];
        arr[last] = tmp;
        start++;
        last--;
      }
    }
    d = d % arr.length;
    reverse(arr, 0, d - 1);
    reverse(arr, d, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
  }
}
