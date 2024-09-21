## Search in rotated sorted array-1

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/logic-building/search-in-rotated-sorted-array-i)

**Solution**:

```js
class Solution {

    search(nums, k) {

        let left =0;

        let right = nums.length - 1;

        while(left<=right){

            let mid = Math.floor((left+right)/2);

            if(nums[mid]===k){

                return mid;

            }

            else if(nums[mid]>=nums[left]){

                if((k>=nums[left])&&(k<=nums[mid])){

                    right = mid -1;

                }else{

                    left = mid + 1;

                }

            }

            else if(nums[right]>=nums[mid]){

                if((k>=nums[mid]) && (k<=nums[right])){

                    left = mid + 1;

                }else {

                    right = mid -1;

                }

            }

        }

        return -1;

    }

}
```

