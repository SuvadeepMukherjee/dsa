class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

(function main() {
  let one = new ListNode(1);
  let two = new ListNode(2);
  let three = new ListNode(3);
  one.next = two;
  two.next = three;
  let head = one;

  console.log(head.val);
  console.log(head.next.val);
  console.log(head.next.next.val);
})();
