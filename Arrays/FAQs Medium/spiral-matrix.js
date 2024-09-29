var spiralOrder = function (matrix) {
  let ans = [];

  // Number of rows
  let n = matrix.length;

  // Number of columns
  let m = matrix[0].length;

  // Initialize pointers for traversal
  let top = 0,
    left = 0;
  let bottom = n - 1,
    right = m - 1;

  // Traverse the matrix in spiral order
  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;

    // Traverse from right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Traverse from bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }

  //Return the ans
  return ans;
};
