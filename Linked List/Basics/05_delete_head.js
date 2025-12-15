
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function deleteHead(head) {
    if (head === null) return null;
    head = head.next;
    return head;
}