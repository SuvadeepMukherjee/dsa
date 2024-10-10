## Fast And Slow Pointers Theory

##### Discuss Fast and slow pointers(Anki):

Fast and slow pointers is an implementation of 2 pointers technique .The 2 pointers dont move side by side .This could mean they move at different speeds during iteration , begin iteration from different locations or any other abstract difference

When the pointers move at different speeds usually the fast pointer moves 2 nodes per iteration whereas the slow pointer moves one node per iteration (This is not always the case)

Pseudocode: 

```
// head is the head node of a linked list
function fn(head):
    slow = head
    fast = head

    while fast and fast.next:
        Do something here
        slow = slow.next
        fast = fast.next.next
```

NB -> The reason we need thev while condition to also check for `fast.next` is because if fast is at the final node then `fast.next` is null and trying to access fast.next.next would result in an error (We would be doing `null.next`) 

##### **Problem 1**: Given the head of a Linked List with an odd number of nodes  , return the value of the node in the middle 

```js
 class ListNode {

  constructor(val) {

    this.val = val;

    this.next = null;

  }

}

let getMiddle = (head) => {};


```

**Solution**:

```js
class ListNode {

  constructor(val) {

    this.val = val;

    this.next = null;

  }

}

let getMiddle = (head) => {

  let slow = head;

  let fast = head;

  while (fast && fast.next) {

    slow = slow.next;

    fast = fast.next.next;

  }

};
```

Time Complexity : O(n)

Space Complexity : O(1)

##### **Problem 2**: [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

**Solution**:

```js
var hasCycle = function(head) {

    let slow = head;

    let fast = head;

    while(fast && fast.next){

        slow = slow.next;

        fast = fast.next.next;

        if(slow===fast) return true;

    }

    return false;

};
```

Time Complexity: O(n)

Space Complexity O(1)

##### **Problem 3** Given the head of a Linked List and an integer k , return the kth node from the end .For example given the Linked List that represents **1-> 2 -> 3 -> 4 -> 5** and k =2 , return the node with value 4 as it is 2nd node from the end 

```js
class ListNode {

  constructor(val) {

    this.val = val;

    this.next = null;

  }

}

let findNode = (head, k) => {};  
```

**Solution**:

Approach: Sepaerate the 2 pointers by a gap of k and then move them at the same speed , they will always be k apart .When the fast pointer (the one further ahead) reaches the end , then the slow pointer must be at the desired node since its k nodes behind

class ListNode {

  constructor(val) {

​    this.val = val;

​    this.next = null;

  }

}

```js
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
```

