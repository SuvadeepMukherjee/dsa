## Notes on Linked Lists

#### Q:Implement  Linked List in js (Anki not needed)

**Answer**:

```js
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
```

#### Q:Why should we keep a reference to the head of a Linked List ? (Anki not needed)

**Answer**:Usually, we will want to keep a reference to the head. This is because  the head is the only node from where we can reach all elements in the  linked list ( we can't go backward), so by  keeping a reference to it, we ensure that we never "lose" any  elements.

#### Q:Advantages and disadvantages comapred to arrays ?(Anki  needed)

##### Advantages : 

1. The main advantage of a linked list is that you can add and remove elements at any position in O(1). The caveat is that you need to have a reference to a node at the  position in which you want to perform the addition/removal, otherwise  the operation is O(n), because we will need to iterate starting from the `head` until you get to the desired position. However, this is still much better than a normal (dynamic) array, which requires O(n) for adding and removing from an *arbitrary* position.
2. Linked lists have the advantage of not having fixed sizes. While dynamic arrays can be resized, under the hood they still are allocated a fixed  size - it's just that when this size is exceeded, the array is resized,  which is expensive. Linked lists don't suffer from this

##### Disadvantages :

1.  The main disadvantage of a linked list is that there is no random  access. If you have a large linked list and want to access the 150,000th element, then there usually isn't a better way than to start at the  head and iterate 150,000 times. So while an array has O(1) indexing, a linked list could require O(n) to access an element at a given position.
2. Linked lists have more overhead than arrays - every element needs to  have extra storage for the pointers. If you are only storing small items like booleans or characters, then you may be more than doubling the  space needed.

#### Q:Get the sum of all values of an integer Linked List , we are given the following 

  

```js
let getSum = head => {}
```



#### (Anki needed)

**Answer**:

```js
let getSum = (head) => {

  let ans = 0;

  while (head) {

    ans += head.val;

    head = head.next;

  }

  return ans;

};
```

