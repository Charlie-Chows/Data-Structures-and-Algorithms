
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function insertionAtHead(head) {
    let newNode = new ListNode(10);
    if (head === null) return newNode;
    newNode.next = head;
    return newNode;
}