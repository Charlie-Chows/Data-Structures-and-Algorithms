function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


var removeNthFromEnd = function (head, n) {
    if (head === null) return null;
    let dummyNode = new ListNode(-1);
    dummyNode.next = head;
    let fast = dummyNode;
    let slow = dummyNode;
    for (i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummyNode.next;
};

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;


removeNthFromEnd(a, 2);


