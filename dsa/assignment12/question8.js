class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function isCircularLinkedList(head) {
    if (!head) return false;
  
    let current = head.next;
  
    while (current !== head && current !== null) {
      current = current.next;
    }
  
    return current === head;
  }
  
  // Example usage:
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(3);
  list1.next.next.next = list1;
  console.log(isCircularLinkedList(list1)); // Output: true
  
  const list2 = new ListNode(10);
  list2.next = new ListNode(5);
  list2.next.next = new ListNode(100);
  console.log(isCircularLinkedList(list2)); // Output: false
  