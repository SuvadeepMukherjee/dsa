var characterReplacement = function (s, k) {
  let left = 0;
  let map = new Map();
  let ans = 0;
  for (let right = 0; right < s.length; right++) {
    const count = (map.get(s[right]) || 0) + 1;
    map.set(s[right], count);
    let max = Math.max(...map.values());
    while (right - left + 1 - max > k) {
      const count2 = map.get(s[left]) - 1;
      map.set(s[left], count2);
      if (map.get(s[left]) === 0) map.delete(s[left]);
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
