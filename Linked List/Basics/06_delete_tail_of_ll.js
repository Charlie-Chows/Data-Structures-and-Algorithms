
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function deleteTail(head) {
    if (head === null || head.next === null) return null;
    let curr = head;
    while (curr.next.next) {
        curr = curr.next;
    }
    curr.next = null;
    return head;
}