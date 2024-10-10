class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let findNode = (head, k) => {
  let slow = head;
  let fast = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};
