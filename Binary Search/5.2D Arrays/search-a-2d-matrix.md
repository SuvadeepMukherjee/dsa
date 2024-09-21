## Search a 2D Matrix

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/2d-arrays/search-in-a-2d-matrix)

**Solution**:

```js
class Solution {

    searchMatrix(mat, target) {

        let m = mat.length;

        let n = mat[0].length;

        let left = 0;

        let right = m * n - 1;

        while(left<=right){

            let mid = Math.floor((left+right)/2);

            let row = Math.floor(mid/n);

            let col = mid % n; 

            let num = mat[row][col];

            if(num === target)return true;

            else if(num<target){

                left = mid + 1;

            }else{

                right = mid -1;

            }

        }

        return false;

    }

}
```

