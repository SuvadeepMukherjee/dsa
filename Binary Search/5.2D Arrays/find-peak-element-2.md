## Find Peak Element 2 

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/2d-arrays/find-peak-element)

**Solution**:

```js
class Solution {

    findPeakGrid(mat) {

        function maxElementColumn(arr,col){

            let n = arr.length;

            let max = -Infinity;

            let index = -1;

            for(let i=0;i<arr.length;i++){

                if(arr[i][col]>max){

                    max=arr[i][col];

                    index = i;

                }

            }

            return index;

        }

        let n = mat.length;

        let m = mat[0].length;

        let left = 0;

        let right = m - 1;

        while(left<=right){

            let mid = Math.floor((left+right)/2);

            let row = maxElementColumn(mat,mid);

            let leftElement = mid-1 >=0 ? mat[row][mid-1]: -Infinity;

            let rightElement = mid + 1 <m ? mat[row][mid+1]: -Infinity;

            if((mat[row][mid]>leftElement) && (mat[row][mid]>rightElement)){

                return [row,mid];

            }else if(leftElement>mat[row][mid]){

                right = mid - 1;

            }else if(rightElement>mat[row][mid]){

                left = mid + 1;

            }

        }

        return [-1,-1];

    }

}
```

