class Solution {
  lenOfLongSubarr(arr, n, k) {
    //code here
    let map = new Map();
    map.set(0, -1);
    let ans = 0;
    let curr = 0;
    for (let i = 0; i < arr.length; i++) {
      curr += arr[i];
      if (map.has(curr - k)) {
        ans = Math.max(ans, i - map.get(curr - k));
      }

      if (!map.has(curr)) {
        map.set(curr, i);
      }
    }
    return ans;
  }
}
