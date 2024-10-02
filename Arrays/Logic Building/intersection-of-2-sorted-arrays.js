class Solution {
  intersectionArray(nums1, nums2) {
    let intersection = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) i++;
      else if (nums2[j] < nums1[i]) j++;
      else {
        intersection.push(nums1[i]);
        i++;
        j++;
      }
    }
    return intersection;
  }
}
