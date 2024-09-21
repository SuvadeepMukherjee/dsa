## Find Square root of a number

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/on-answers/find-square-root-of-a-number)

**Solution**:

```js
class Solution {

    floorSqrt(n) {

      let left = 1;

      let right = n;

      while(left<=right){

        let mid = Math.floor((left+right)/2);

        let val = mid*mid;

        if(val>n){

            right = mid -1;

        }else{

            left = mid + 1;

        }

      }

      return right;

    }

}
```

