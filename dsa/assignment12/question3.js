class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function findNthFromEnd(head, n) {
    if (!head) return -1;
  
    let count = 0;
    let temp = head;
  
    while (temp) {
      count++;
      temp = temp.next;
    }
  
    if (n > count) return -1;
  
    let target = count - n;
    temp = head;
  
    while (target > 0) {
      temp = temp.next;
      target--;
    }
  
    return temp.val;
  }
  
  // Example usage:
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(3);
  list1.next.next.next = new ListNode(4);
  list1.next.next.next.next = new ListNode(5);
  console.log(findNthFromEnd(list1, 2)); // Output: 4
  
  const list2 = new ListNode(10);
  list2.next = new ListNode(5);
  list2.next.next = new ListNode(100);
  console.log(findNthFromEnd(list2, 5)); // Output: -1
  