## Array Notes

#### Q1:Write a function that reverses the first k elements of the array ? 

**Solution**:

```js
function reverse(arr, start, end) {

  let left = start;

  let right = end;

  while (left < right) {

    let tmp = arr[left];

    arr[left] = arr[right];

    arr[right] = tmp;

    left++;

    right--;

  }

}

let nums = [1, 2, 3, 4, 5, 6, 7];

reverse(nums, 0, 2);

console.log(nums);
```

#### Q2:Create an array of length say 7 filled with 0 

**Answer**: `const arr = Array(length:7).fill(0)` 

#### Q3: Given an matrix how is a individual cell identified ? 

**Answer**: An individual matrix is identified by `matrix[row][column]`

