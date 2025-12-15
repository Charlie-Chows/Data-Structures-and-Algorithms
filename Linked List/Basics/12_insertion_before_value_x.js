
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function insertionBeforeValueX(head, node, x) {
    if (head === null) return null;
    if (head.val === x) {
        node.next = head;
        return node;
    }

    let curr = head;
    while (curr.next && curr.next.val !== x) {
        curr = curr.next;
    }

    // if x not found
    if(curr.next === null ) return head;

    node.next = curr.next;
    curr.next = node;

    return head;
}

let head = new ListNode(10);
head.next = new ListNode(20);
head.next.next = new ListNode(30);
head.next.next.next = new ListNode(40);

let newNode = new ListNode(25);

console.log(insertionBeforeValueX(head, newNode, 30));
