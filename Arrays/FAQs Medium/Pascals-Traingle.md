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
function nthRow(n) {
  let arr = [];
  arr.push(1);
  let ans = 1;
  for (let i = 1; i < n; i++) {
    ans = ans * (n - i);
    ans = Math.floor(ans / i);
    arr.push(ans);
  }
  return arr;
}
console.log(nthRow(5));

```

#### Q3:Question can be found [here](https://leetcode.com/problems/pascals-triangle/description/)

**Solution**:

```js
var generate = function(numRows) {

    function nthRow(n) {

      let arr = [];

      arr.push(1);

      let ans = 1;

      for (let i = 1; i < n; i++) {

        ans = ans * (n - i);

        ans = Math.floor(ans / i);

        arr.push(ans);

      }

      return arr;

    }

    let pascalTriangle = [];

    for (let row = 1; row <= numRows; row++) {

      pascalTriangle.push(nthRow(row));

    }

    return pascalTriangle;

};
```

