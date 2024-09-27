## Length of largest subarray whose sum is less than or equal to k

Question: Given an array of positive integers `nums` and an integer `k`, find the length of the longest subarray whose sum is less than or equal to `k`. This is the problem we have been talking about above. 

For the array = [3,1,2,7,4,2,1,1,5] the length of the longest subarray with sum less than or equal to 8 is 4

**Solution**:

```js
var findLength = function (nums, k) {

  let left = 0;

  let curr = 0;

  let ans = 0;

  for (let right = 0; right < nums.length; right++) {

    curr += nums[right];

    while (curr > k) {

      curr -= nums[left];

      left++;

    }

    ans = Math.max(ans, right - left + 1);

  }

  return ans;

};

let arr = [3, 1, 2, 7, 4, 2, 1, 1, 5];

console.log(findLength(arr, 8));
```

