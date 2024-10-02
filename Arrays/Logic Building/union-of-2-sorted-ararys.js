class Solution {
  //Function to return a list containing the union of the two arrays.
  findUnion(arr1, arr2, n, m) {
    //your code here
    let union = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
          union.push(arr1[i]);
        }
        i++;
      } else {
        if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
          union.push(arr2[j]);
        }
        j++;
      }
    }
    while (i < arr1.length) {
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    }
    while (j < arr2.length) {
      if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    }
    return union;
  }
}
