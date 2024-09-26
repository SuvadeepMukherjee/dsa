var isAnagram = function (s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    const count = (map.get(s[i]) || 0) + 1;
    map.set(s[i], count);
  }
  for (let i = 0; i < t.length; i++) {
    const count = map.get(t[i]) - 1;
    map.set(t[i], count);
  }

  for (let [num, freq] of map) {
    const isZero = freq === 0;
    if (!isZero) return false;
  }
  return true;
};
