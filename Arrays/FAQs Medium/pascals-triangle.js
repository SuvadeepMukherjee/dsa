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
console.log(nthRow(6));
