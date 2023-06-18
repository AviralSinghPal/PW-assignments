class ListNode {
  constructor(data = 0, next = null) {
    this.data = data;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  const dummy = new ListNode();
  let p = l1;
  let q = l2;
  let curr = dummy;
  let carry = 0;

  while (p !== null || q !== null) {
    const x = p !== null ? p.data : 0;
    const y = q !== null ? q.data : 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
}
