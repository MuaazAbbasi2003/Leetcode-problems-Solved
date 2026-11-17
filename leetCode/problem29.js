class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
const head = node1;

var deleteMiddle = function (head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head.next.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;

  return head;
};
const hel = deleteMiddle(head);
console.log(hel);
