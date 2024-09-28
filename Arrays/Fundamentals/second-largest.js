class Solution {
  // Function returns the second largest element
  getSecondLargest(arr) {
    // Code Here
    let largest = -Infinity;
    let slargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        slargest = largest;
        largest = arr[i];
      } else if (arr[i] > slargest && arr[i] !== largest) {
        slargest = arr[i];
      }
    }
    return slargest === -Infinity ? -1 : slargest;
  }
}
