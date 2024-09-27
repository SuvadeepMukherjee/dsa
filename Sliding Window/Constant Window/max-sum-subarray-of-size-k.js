class Solution {
  maximumSumSubarray(K, Arr, N) {
    //code here
    let curr = 0;
    for (let i = 0; i < K; i++) {
      curr += Arr[i];
    }
    let ans = curr;
    let index = 0;
    for (let i = K; i < Arr.length; i++) {
      curr += Arr[i];
      curr -= Arr[index];

      ans = Math.max(curr, ans);
      index++;
    }
    return ans;
  }
}
