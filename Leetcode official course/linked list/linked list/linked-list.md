## Linked List 

Linked List is a data structure that stores data in an ordered manner implemented using node objects (custom class that defines the node object). Each node will have a next pointer that points to the node representing the next element in the sequence

<img src="../../../assets/linked-list.png" alt="linked-list" style="zoom:50%;" />

To implement the above linked list in js we write the following code 

```js
class ListNode {

  constructor(val) {

    this.val = val;

    this.next = null;

  }

}

let one = new ListNode(1);

let two = new ListNode(2);

let three = new ListNode(3);

one.next = two;

two.next = three;
```

