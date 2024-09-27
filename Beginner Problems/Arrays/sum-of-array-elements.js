class Solution {
  sum(arr, n) {
    let totalSum = 0; // Line 3: Rename variable for clarity
    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i]; // Line 5: Improve readability
    }
    return totalSum;
  }
}
