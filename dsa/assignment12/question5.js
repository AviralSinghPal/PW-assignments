class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function removeLoop(head) {
    if (!head || !head.next) return null;
  
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        slow = head;
  
        while (slow.next !== fast.next) {
          slow = slow.next;
          fast = fast.next;
        }
  
        fast.next = null;
        return head;
      }
    }
  
    return head;
  }
  
  // Example usage:
  const list1 = new ListNode(1);
  list1.next = new ListNode(3);
  list1.next.next = new ListNode(4);
  list1.next.next.next = list1.next;
  console.log(removeLoop(list1)); // Output: 1 -> 3 -> 4
  