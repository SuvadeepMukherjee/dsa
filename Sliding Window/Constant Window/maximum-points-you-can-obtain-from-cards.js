var maxScore = function (cardPoints, k) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
    curr += cardPoints[i];
  }
  let ans = curr;
  let index = cardPoints.length - 1;
  for (let i = k - 1; i >= 0; i--) {
    curr -= cardPoints[i];
    curr += cardPoints[index];
    index--;
    ans = Math.max(ans, curr);
  }
  return ans;
};
