class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let addNode = (prevNode, nodeToAdd) => {
  nodeToAdd.next = prevNode.next;
  prevNode.next = nodeToAdd;
};
