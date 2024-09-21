## Find out how many times the array is rotated

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/logic-building/find-out-how-many-times-the-array-is-rotated)

**Solution**:

```js
class Solution {

    findKRotation(nums) {

      let left = 0;

      let right = nums.length - 1;

      let index = -1;

      let ans = Infinity

      while(left<=right){

        let mid = Math.floor((left+right)/2);

        if(nums[left]<=nums[right]){

            if(nums[left]<ans){

                index = left;

                ans = nums[left];

            }

            break;

        }

        if(nums[left]<=nums[mid]){

            if(nums[left]<ans){

                index = left;

                ans = nums[left];

            }

            left = mid + 1;

        }

        else if(nums[right]>=nums[mid]){

            if(nums[mid]<ans){

                index = mid;

                ans= nums[mid]

            }

            right = mid -1;

        }

      }

      return index;

    }

}
```

