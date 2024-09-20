## Lower Bound

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/fundamentals/lower-bound-)

**Solution**:

```js
class Solution {

    lowerBound(nums, x) {

      let left = 0;

      let right = nums.length -1;

      let ans = nums.length;

      while(left<=right){

        let mid = Math.floor((left+right)/2);

        if(nums[mid]>=x){

            ans=mid;

            right = mid - 1; 

        }else{

            left = mid +1;

        }

      }

      return ans;

    }

}
```

