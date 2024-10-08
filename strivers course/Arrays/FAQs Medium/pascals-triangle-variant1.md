## Pascals Triangle Variant 1 

#### Q:Given a pascals triangle find the element at row 5 and colmn 3? 

**Answer**:The element at row 5 and column 3 is `5C3`

```js
function nCr(n, r) {

  let res = 1;

  for (let i = 0; i < r; i++) {

    res = res * (n - i);

    res = Math.floor(res / (i + 1));

  }

  return res;

}

console.log(nCr(5, 3)); 
```

