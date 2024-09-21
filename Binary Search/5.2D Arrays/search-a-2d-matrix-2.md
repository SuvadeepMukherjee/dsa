## Search a 2D Matrix -2 

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/2d-arrays/search-in-2d-matrix-ii)

**Solution**:

```js
class Solution {

    searchMatrix(matrix, target) {

        let n = matrix.length;

        let m = matrix[0].length;

        let row =0;

        let col = m-1;

        while(row<n && col>=0){

            if(matrix[row][col]===target) return true;

            else if(matrix[row][col]<target){

                row++;

            } else{

                col--

            }

        }

        return false; 

    }

}
```

