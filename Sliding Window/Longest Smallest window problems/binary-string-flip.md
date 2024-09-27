## Binary String flip

You are given a binary string `s` (a string containing only `"0"` and `"1"`). You may choose up to one `"0"` and flip it to a `"1"`. What is the length of the longest substring achievable that contains only `"1"`?

For example, given `s = "1101100111"`, the answer is `5`. If you perform the flip at index `2`, the string becomes `1111100111`.

**Solution**:

```js
var findLength = function (s) {

  let curr = 0;

  let ans = 0;

  let left = 0;

  for (let right = 0; right < s.length; right++) {

    if (s[right] === "0") curr++;

    while (curr > 1) {

      if (s[left] === "0") {

        curr--;

      }

      left++;

    }

    ans = Math.max(ans, right - left + 1);

  }

  return ans;

};

let str = "1101100111";

console.log(findLength(str));
```

