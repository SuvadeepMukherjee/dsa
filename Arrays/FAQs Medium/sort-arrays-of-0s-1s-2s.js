class Solution {
  // Function to sort an array of 0s, 1s, and 2s
  sort012(arr) {
    // your code here
    let low = 0;
    let medium = 0;
    let high = arr.length - 1;
    while (medium <= high) {
      if (arr[medium] === 0) {
        [arr[low], arr[medium]] = [arr[medium], arr[low]];
        medium++;
        low++;
      } else if (arr[medium] === 1) {
        medium++;
      } else {
        [arr[medium], arr[high]] = [arr[high], arr[medium]];
        high--;
      }
    }
  }
}
