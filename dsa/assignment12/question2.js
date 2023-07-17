class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function detectLoop(head) {
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true;
      }
    }
  
    return false;
  }
  
  // Example usage:
  const list1 = new ListNode(1);
  list1.next = new ListNode(3);
  list1.next.next = new ListNode(4);
  list1.next.next.next = list1.next;
  console.log(detectLoop(list1)); // Output: true
  
  const list2 = new ListNode(1);
  list2.next = new ListNode(8);
  list2.next.next = new ListNode(3);
  console.log(detectLoop(list2)); // Output: false
  