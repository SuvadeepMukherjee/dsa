## Maximum Points you can obtain from cards

Question can be found [here](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/)

**Solution**:

```js
var maxScore = function(cardPoints, k) {

    let curr =0;

    for(let i=0;i<k;i++){

        curr+= cardPoints[i];

    }

    let ans = curr;

    let index = cardPoints.length-1;

    for(let i=k-1;i>=0;i-- ){

        curr+= cardPoints[index];

        curr-= cardPoints[i];

        index--;

        ans = Math.max(ans,curr)

    }

    return ans;

};
```

