var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let arr = [];
  while (left <= right && top <= bottom) {
    //left to right
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top][i]);
    }
    top++;

    //traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      arr.push(matrix[i][right]);
    }
    right--;

    if (!(left <= right && top <= bottom)) {
      break;
    }
    //traverse from right to left
    for (let i = right; i >= left; i--) {
      arr.push(matrix[bottom][i]);
    }
    bottom--;

    //traverse from bottom to top
    for (let i = bottom; i >= top; i--) {
      arr.push(matrix[i][left]);
    }
    left++;
  }
  return arr;
};
