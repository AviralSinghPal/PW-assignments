class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function isPalindrome(head) {
    if (!head || !head.next) return true;
  
    let slow = head;
    let fast = head;
    let stack = [];
  
    while (fast && fast.next) {
      stack.push(slow.val);
      slow = slow.next;
      fast = fast.next.next;
    }
  
    if (fast) slow = slow.next;
  
    while (slow) {
      if (slow.val !== stack.pop()) {
        return false;
      }
      slow = slow.next;
    }
  
    return true;
  }
  
  // Example usage:
  const list1 = new ListNode('R');
  list1.next = new ListNode('A');
  list1.next.next = new ListNode('D');
  list1.next.next.next = new ListNode('A');
  list1.next.next.next.next = new ListNode('R');
  console.log(isPalindrome(list1)); // Output: true
  
  const list2 = new ListNode('C');
  list2.next = new ListNode('O');
  list2.next.next = new ListNode('D');
  list2.next.next.next = new ListNode('E');
  console.log(isPalindrome(list2)); // Output: false
  