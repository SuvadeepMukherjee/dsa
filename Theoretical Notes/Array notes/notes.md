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

#### Q4: How do you swap two array elements  in JavaScript

**Answer**:`[nums[left],nums[right]]=[nums[right],nums[left]]`

##### Q5: Array.prototype.join() => 

**Answer**: The join() method of array instances creates and returns a new string by concatenating all of the elements in this array , seperated by commas or a specified seperator string .If the array is only one item , then that item will be returned without using the seperator

Syntax : `join()`, `join(seperator)`
