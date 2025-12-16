
function ListNode(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
}

function deleteHead(head) {
    if (head === null) return null;
    if (head.next === null) return null;
    let newNode = head.next;
    newNode.prev = null;
    return newNode;
}

let head = new ListNode(10);
let second = new ListNode(20);
let third = new ListNode(30);
let fourth = new ListNode(40);

// forward links
head.next = second;
second.next = third;
third.next = fourth;

// backward links
second.prev = head;
third.prev = second;
fourth.prev = third;

console.log(deleteHead(head));