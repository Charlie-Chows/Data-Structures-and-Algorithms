
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function deleteKthNode(head, k) {
    if (head === null) return null;
    if (k === 1) {
        return head.next;
    }

    let curr = head;
    let count = 1;
    while (curr && count + 1 < k) {
        curr = curr.next;
        count++;
    }

    if (curr === null || curr.next === null) {
        return head;
    }

    curr.next = curr.next.next;

    return head;
}