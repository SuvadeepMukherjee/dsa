var totalFruit = function (fruits) {
  let map = new Map();
  let left = 0;
  let ans = 0;
  for (let right = 0; right < fruits.length; right++) {
    const count = (map.get(fruits[right]) || 0) + 1;
    map.set(fruits[right], count);
    while (map.size > 2) {
      const count2 = map.get(fruits[left]) - 1;
      map.set(fruits[left], count2);
      if (map.get(fruits[left]) === 0) map.delete(fruits[left]);
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
