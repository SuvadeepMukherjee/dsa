var rotate = function (matrix) {
  function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
      left++;
      right--;
    }
  }
  // transpose
  let n = matrix.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    reverse(matrix[i]);
  }
};
