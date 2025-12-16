
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function sort012LL(head) {
    if (head === null) return null;
    if (head.next === null) return head;

    let zeroDummyNode = new ListNode(-1);
    let oneDummyNode = new ListNode(-1);
    let twoDummyNode = new ListNode(-1);

    let zero = zeroDummyNode;
    let one = oneDummyNode;
    let two = twoDummyNode;

    let curr = head;

    while (curr) {
        let newNode = curr.next;
        curr.next = null;

        if (curr.val === 0) {
            zero.next = curr;
            zero = curr;
        }
        else if (curr.val === 1) {
            one.next = curr;
            one = curr;
        }
        else {
            two.next = curr;
            two = curr;
        }
        curr = newNode;
    }

    if (zeroDummyNode.next !== null) zero.next = oneDummyNode.next || twoDummyNode.next;
    if (oneDummyNode.next !== null) one.next = twoDummyNode.next;

    if (zeroDummyNode.next) return zeroDummyNode.next;
    if (oneDummyNode.next) return oneDummyNode.next;
    return twoDummyNode.next;
}