## Search Insert Position

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/logic-building/search-insert-position)

**Solution**:

```js
class Solution {

    searchInsert(nums, target) {

       let left =0;

       let right = nums.length-1;

       while(left<=right){

        let mid = Math.floor((left+right)/2);

        if(nums[mid]===target){

            return mid;

        }else if(nums[mid]>target){

            right = mid -1;

        }else if(nums[mid]<target){

            left = mid + 1;

        }

       }

       return left;

    }

}
```

