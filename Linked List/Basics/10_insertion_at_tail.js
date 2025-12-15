
function ListNode ( val, next = null) {
    this.val = val;
    this.next = next;
}

function insertionAtTail ( head, node) {
    if ( head === null ) return node;

    let curr = head;
    while ( curr.next ) {
        curr = curr.next;
    }
    curr.next = node;
    return head;
}

let head = new ListNode(10);
head.next = new ListNode(20);
head.next.next = new ListNode(30);

let newNode = new ListNode(40);

console.log(insertionAtTail(head, newNode));
