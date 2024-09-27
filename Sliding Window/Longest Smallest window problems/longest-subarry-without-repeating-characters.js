class Solution {
  longestNonRepeatingSubstring(s) {
    //your code goes here
    let left = 0;
    let ans = 0;
    let set = new Set();
    for (let right = 0; right < s.length; right++) {
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }
      ans = Math.max(ans, right - left + 1);
      set.add(s[right]);
    }
    return ans;
  }
}
