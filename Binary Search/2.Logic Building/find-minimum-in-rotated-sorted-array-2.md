## Find minimum in rotated sorted array

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/logic-building/find-minimum-in-rotated-sorted-array)

**Solution**:

```js
class Solution {

    findMin(arr) {

       let left =0;

       let right = arr.length -1;

       let min = Infinity;

       while(left<=right){

        let mid = Math.floor((left+right)/2);

        if(arr[mid]>=arr[left]){

            min = Math.min(min,arr[left]);

            left = mid + 1;

        }else if(arr[right]>=arr[mid]){

            min = Math.min(min,arr[mid])

            right = mid - 1;

            

        }

       }

       return min;

    }

}
```

