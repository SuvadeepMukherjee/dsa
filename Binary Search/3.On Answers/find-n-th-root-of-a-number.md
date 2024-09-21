## Find nth root of a number

Question can be found [here](https://takeuforward.org/plus/data-structures-and-algorithm/binary-search/on-answers/find-nth-root-of-a-number)

**Solution**:

```js
class Solution {

    NthRoot(n, m) {

      function helper(mid,n,m){

        let ans = 1;

        for(let i=1;i<=n;i++){

            ans*= mid;

            

        }

        if(ans>m) return 2;

        else if(ans===m) return 1;

        else return 0;

        

      }

      let left =1;

      let right = m;

      while(left<=right){

        let mid = Math.floor((left+right)/2);

        let midN = helper(mid,n,m);

        if(midN===1) return mid;

        else if(midN===0){

            left = mid  +1;

        }else{

            right = mid -1

        }

      }

      return -1;

    }

}
```

