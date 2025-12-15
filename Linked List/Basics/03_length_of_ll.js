
function ListNode(val, next) {
    this.val = val;
    this.next = null;
}

function lengthOfLL(head) {
    let curr = head;
    let len = 0;
    while (curr) {
        len++;
        curr = curr.next;
    }
    return len;
}