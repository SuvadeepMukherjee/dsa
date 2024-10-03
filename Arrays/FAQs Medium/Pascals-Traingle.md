## Find element in pascals triangle 

#### Q1:Given the row number and column number  find the element in pascals triangle at row 6 and column 4? 

**Solution** Given row number r and column number c the element will be r-1 C c-1

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

------

#### Q2: Print the nth row of pascals triangle ? 

```js
function nCr(n, r) {

  let res = 1;

  for (let i = 0; i < r; i++) {

    res = res * (n - i);

   res = Math.floor(res / (i + 1));

  }

  return res;

}

function generate(n) {

  let arr = [];

  for (let c = 1; c <= n; c++) {

    arr.push(nCr(n - 1, c - 1));

  }

  return arr;

}

console.log(generate(6));
```

