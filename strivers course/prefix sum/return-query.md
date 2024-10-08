## Return Query

Given an integer array `nums`, an array `queries` where `queries[i] = [x, y]` and an integer `limit`, return a boolean array that represents the answer to each query. A query is `true` if the sum of the subarray from `x` to `y` is less than `limit`, or `false` otherwise.

For example, given `nums = [1, 6, 3, 2, 7, 2]`, `queries = [[0, 3], [2, 5], [2, 4]]`, and `limit = 13`, the answer is `[true, false, true]`. For each query, the subarray sums are `[12, 14, 12]`.

**Solution**:

```js
var answerQueries = function (nums, queries, limit) {

  let prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {

    prefix.push(nums[i] + prefix[prefix.length - 1]);

  }

  let ans = [];

  for (const [x, y] of queries) {

    let curr = prefix[y] - prefix[x] + nums[x];

    ans.push(curr < limit);

  }

  return ans;

};

let arr = [1, 6, 3, 2, 7, 2];

let query = [

  [0, 3],

  [2, 5],

  [2, 4],

];

let limits = 13;

console.log(answerQueries(arr, query, limits));
```

