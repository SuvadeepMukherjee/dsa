class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let deleteNode = (prevNode) => {
  prevNode.next = prevNode.next.next;
};
