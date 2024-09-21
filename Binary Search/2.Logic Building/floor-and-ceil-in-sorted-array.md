## Floor and ceil in sorted array

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/logic-building/floor-and-ceil-in-sorted-array)

**Solution**:

```js
class Solution {

    getFloorAndCeil(nums, x) {

        let ans =[-1,-1];

        let left =0;

        let right = nums.length-1;

        while(left<=right){

            let mid = Math.floor((left+right)/2);

            if(nums[mid]<=x){

                ans[0]=nums[mid];

                left = mid + 1;

            }else{

                right = mid -1;

            }

        }

        left =0;

        right = nums.length - 1;

        while(left<=right){

            let mid = Math.floor((left+right)/2);

            if(nums[mid]>=x){

                ans[1]= nums[mid];

                right = mid -1;

            }else{

                left = mid + 1;

            }

        }

        return ans;

    }

}
```

