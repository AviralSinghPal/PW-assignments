class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function deleteMiddleNode(head) {
    if (!head || !head.next) return null;
  
    let slow = head;
    let fast = head;
    let prev = null;
  
    while (fast && fast.next) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
  
    prev.next = slow.next;
    return head;
  }
  
  // Example usage:
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(3);
  list1.next.next.next = new ListNode(4);
  list1.next.next.next.next = new ListNode(5);
  console.log(deleteMiddleNode(list1)); // Output: 1 -> 2 -> 4 -> 5
  