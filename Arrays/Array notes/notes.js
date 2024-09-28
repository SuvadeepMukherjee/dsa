function reverse(arr, start, end) {
  let left = start;
  let right = end;
  while (left < right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7];

reverse(nums, 0, 2);

console.log(nums);
