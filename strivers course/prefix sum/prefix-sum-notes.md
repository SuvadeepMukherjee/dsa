## Prefix Sum notes

- prefix sum allows us to find the sum of any subarrat in O(1) , sum of subarray from i to j (inclusive) = prefix[j]=prefix[i]+nums[i]

- Building a prefix sum

  ```js
  //given an array nums
  
  let prefix = [nums[0]];
  
  for (let i = 1; i < nums.length; i++) {
  
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  
  }
  ```

  