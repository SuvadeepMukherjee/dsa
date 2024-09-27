class Solution {
  kDistinctChar(s, k) {
    //your code goes here
    let left = 0;
    let map = new Map();
    let ans = 0;
    for (let right = 0; right < s.length; right++) {
      const count = (map.get(s[right]) || 0) + 1;
      map.set(s[right], count);
      while (map.size > k) {
        const count = map.get(s[left]);
        map.set(s[left], count - 1);
        if (map.get(s[left]) === 0) map.delete(s[left]);
        left++;
      }
      ans = Math.max(ans, right - left + 1);
    }
    return ans;
  }
}
