class Solution {
  // Function to find the leaders in the array.
  leaders(n, arr) {
    // code here
    let max = -Infinity;
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] >= max) {
        max = arr[i];
        res.push(arr[i]);
      }
    }
    res = res.reverse();
    return res;
  }
}
