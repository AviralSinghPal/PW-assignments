class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function mergeAlternateNodes(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
  
    let current1 = list1;
    let current2 = list2;
  
    while (current1 && current2) {
      const next1 = current1.next;
      const next2 = current2.next;
  
      current1.next = current2;
      current2.next = next1;
  
      current1 = next1;
      current2 = next2;
    }
  
    return list1;
  }
  
  // Example usage:
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(3);
  list1.next.next.next = new ListNode(4);
  
  const list2 = new ListNode(12);
  list2.next = new ListNode(10);
  list2.next.next = new ListNode(2);
  list2.next.next.next = new ListNode(4);
  list2.next.next.next.next = new ListNode(6);
  console.log(mergeAlternateNodes(list1, list2)); // Output: 1 -> 12 -> 2 -> 10 -> 3 -> 2 -> 4 -> 4 -> 6
  