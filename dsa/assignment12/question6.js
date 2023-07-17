class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function mNAlternatingDelete(head, m, n) {
    let current = head;
    let prev = null;
  
    while (current) {
      // Traverse M nodes to keep
      for (let i = 1; i < m && current; i++) {
        current = current.next;
      }
  
      if (!current) return head;
  
      // Store the Mth node and move to the next one
      const mthNode = current;
      current = current.next;
  
      // Traverse N nodes to delete
      for (let i = 1; i <= n && current; i++) {
        const nextNode = current.next;
        current = nextNode;
      }
  
      // Adjust the links
      if (prev) {
        prev.next = current;
      } else {
        head = current;
      }
    }
  
    return head;
  }
  
  // Example usage:
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(3);
  list1.next.next.next = new ListNode(4);
  list1.next.next.next.next = new ListNode(5);
  list1.next.next.next.next.next = new ListNode(6);
  list1.next.next.next.next.next.next = new ListNode(7);
  list1.next.next.next.next.next.next.next = new ListNode(8);
  console.log(mNAlternatingDelete(list1, 2, 2)); // Output: 1 -> 2 -> 5 -> 6
  