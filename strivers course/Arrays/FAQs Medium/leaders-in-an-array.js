class Solution {
  // Function to find the leaders in the array.

  leaders(n, arr) {
    // code here
    function reverse(array) {
      let left = 0;
      let right = array.length - 1;
      while (left < right) {
        let tmp = array[left];
        array[left] = array[right];
        array[right] = tmp;
        left++;
        right--;
      }
      return array;
    }
    let max = -Infinity;
    let leaders = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] >= max) {
        leaders.push(arr[i]);
        max = arr[i];
      }
    }
    return reverse(leaders);
  }
}
