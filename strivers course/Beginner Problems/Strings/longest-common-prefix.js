var longestCommonPrefix = function (strs) {
  strs = strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];
  let commonPrefix = "";
  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    if (first[i] !== last[i]) break;
    commonPrefix += first[i];
  }
  return commonPrefix;
};
