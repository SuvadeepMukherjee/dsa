## Pascals Triangle Variant 2

[Question](https://leetcode.com/problems/pascals-triangle/) can be found here

```js
function nthRow(n) {

  let arr = [];

  arr.push(1);

  let res = 1;

  for (let i = 1; i < n; i++) {

    res = res * (n - i);

    res = Math.floor(res / i);

    arr.push(res);

  }

  return arr;

}

var generate = function(numRows) {

    let triangle = [];

    for(let i =1;i<=numRows;i++){

        triangle.push(nthRow(i))

    }

    return triangle;

};
```

