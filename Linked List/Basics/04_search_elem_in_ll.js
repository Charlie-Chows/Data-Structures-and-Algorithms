
function ListNode(val, next = null) {
    this.val = val;
    this.next = null;
}

// using while loop
function searchElement(head, elem) {
    let curr = head;
    while (curr) {
        if (curr.val === elem) {
            return true;
        }
        curr = curr.next;
    }
    return false;
}

// using for loop 
function searchElem(head, elem) {
    for (let curr = head; curr; curr = curr.next) {
        if (curr.val === elem) {
            return true;
        }
    }
    return false;
}