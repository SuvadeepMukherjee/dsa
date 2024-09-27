var frequencySort = function (s) {
  let freqMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const count = (freqMap.get(s[i]) || 0) + 1;
    freqMap.set(s[i], count);
  }
  let bucketArray = Array.from({ length: s.length + 1 }, () => []);

  for (let [num, freq] of freqMap) {
    bucketArray[freq].push(num);
  }
  let res = [];
  for (let i = bucketArray.length - 1; i >= 0; i--) {
    for (let j = 0; j < bucketArray[i].length; j++) {
      res.push(bucketArray[i][j].repeat(i));
    }
  }
  return res.join("");
};
