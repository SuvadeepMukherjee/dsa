## Longest substrings without repeating characters 

Question can be found [here](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

**Solution**:

```js
var lengthOfLongestSubstring = function(s) {

    let set = new Set();

    let left =0;

    let ans =0;

    for(let right =0;right<s.length;right++){

        while(set.has(s[right])){

            if(set.has(s[left])){

                set.delete(s[left]);

            }

            left++;

        }

        set.add(s[right]);

        ans = Math.max(ans,right-left+1)

    }

    return ans;

};
```

