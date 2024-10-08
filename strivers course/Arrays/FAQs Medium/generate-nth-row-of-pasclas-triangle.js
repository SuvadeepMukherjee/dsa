function nCr(n, r) {
  let res = 1;
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = Math.floor(res / (i + 1));
  }
  return res;
}

function generateRow(n) {
  let arr = [];
  for (let c = 1; c <= n; c++) {
    arr.push(nCr(n - 1, c - 1));
  }
  return arr;
}

console.log(generateRow(5));
