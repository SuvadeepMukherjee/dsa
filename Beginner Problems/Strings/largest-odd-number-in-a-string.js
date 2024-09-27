var largestOddNumber = function (num) {
  let ind = -1;
  for (let i = num.length - 1; i >= 0; i--) {
    if ((num[i] - "0") % 2 === 1) {
      ind = i;
      break;
    }
  }
  return num.substring(0, ind + 1);
};
