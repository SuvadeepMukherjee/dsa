class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let getSum = (head) => {
  let curr = head;
  let sum = 0;
  while (curr) {
    sum += curr.val;
    curr = curr.next;
  }
  return sum;
};
