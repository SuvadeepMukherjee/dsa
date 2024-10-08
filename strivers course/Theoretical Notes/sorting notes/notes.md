## Notes on sorting

#### Q1: Use in built sorting to sort an array in ascending order

**Answer**:

```js
let arr = [1, 3, 5, 7, 9, 0, 2, 4, 6, 8];

arr = arr.sort((a, b) => a - b);

console.log(arr);
```

#### Q2:Use in built sorting to sort an array in descending order

**Answer**:

```js
let arr = [1, 3, 5, 7, 9, 0, 2, 4, 6, 8];

arr = arr.sort((a, b) => b - a);

console.log(arr);
```

