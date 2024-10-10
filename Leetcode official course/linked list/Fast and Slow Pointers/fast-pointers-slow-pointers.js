class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let findNode = (head, k) => {};

let curr1 = head;
while (curr1) {
  curr1 = curr1.next;
}

let curr2 = head;
for (let i = 0; i < k; i++) {
  curr2 = curr2.next;
}
