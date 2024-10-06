let getSum = (head) => {
  let ans = 0;
  while (head) {
    ans += head.val;
    head = head.next;
  }

  return ans;
};
