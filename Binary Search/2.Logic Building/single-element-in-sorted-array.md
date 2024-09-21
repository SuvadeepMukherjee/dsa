## Single element in a sorted array

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/logic-building/single-element-in-sorted-array)

**Solution**:

```js
class Solution {
  singleNonDuplicate(nums) {
    let l = 0;

    let r = nums.length - 1;

    while (l <= r) {
      let m = l + Math.floor((r - l) / 2);

      // Check if the middle element is the single non-duplicate

      if (
        (m - 1 < 0 || nums[m - 1] !== nums[m]) &&
        (m + 1 === nums.length || nums[m] !== nums[m + 1])
      ) {
        return nums[m];
      }

      // Determine which side to continue searching

      let leftSize = nums[m - 1] === nums[m] ? m - 1 : m;

      if (leftSize % 2 === 1) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    return -1;
  }
}

```

