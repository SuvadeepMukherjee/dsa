## Find the smallest divisor 

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/on-answers/find-the-smallest-divisor)

**Solution**:

```js
class Solution {

    smallestDivisor(nums, limit) {

     function sumByD(nums,limit){

        let sum =0;

        for(let i=0;i<nums.length;i++ ){

            sum+= Math.ceil(nums[i]/limit)

        }

        return sum; 

     }

     let left =1;

     let right = Math.max(...nums);

     while(left<=right){

        let mid = Math.floor((left+right)/2);

        if(sumByD(nums,mid)<=limit){

            right = mid -1;

        }else{

            left = mid + 1;

        }

     }

     return left;

    }

    

}
```

