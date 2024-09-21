## Find row with max ones

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/2d-arrays/find-row-with-maximum-1's)

**Solution**:

```js
class Solution {

    rowWithMax1s(mat) {

        function lowerBound(arr,n,x){

            let left =0;

            let ans =n;

            let right = arr.length-1;

            while(left<=right){

                let mid = Math.floor((left+right)/2);

                if(arr[mid]>=x){

                    ans = mid;

                    right = mid -1;

                }else{

                    left = mid + 1;

                }

            }

            return ans;

        }

        let n = mat.length;

        let m=mat[0].length;

        let cnt_max =0;

        let index =-1;

        for(let i=0;i<n;i++){

            let cnt_ones = m - lowerBound(mat[i],m,1);

            if(cnt_ones>cnt_max){

                cnt_max=cnt_ones;

                index = i;

            }

        }

        return index;

    }

}
```

