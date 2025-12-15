
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function insertionAtKthNode(head, node, k) {
    if (head === null) {
        if (k === 1) return node;
        return null;
    };

    if (k === 1) {
        node.next = head;
        return node;
    }

    let count = 1;
    let curr = head;
    while (curr.next && count + 1 < k) {
        curr = curr.next;
        count++;
    }

    node.next = curr.next;
    curr.next = node;
    return head;
}


let head = new ListNode(10);
head.next = new ListNode(20);
head.next.next = new ListNode(30);
head.next.next.next = new ListNode(40);

let newNode = new ListNode(25);

console.log(insertionAtKthNode(head, newNode, 3));
