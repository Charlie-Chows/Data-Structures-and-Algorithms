
function ListNode ( val, next = null ) {
    this.val = val;
    this.next =next;
}

function deleteNodeWithValueX ( head, x ) {
    if ( head === null ) return null;
    if ( head.val === x ) return head.next;

    let curr = head;
    while ( curr.next && curr.next.val !== x ) {
        curr = curr.next;
    }

    if ( curr === null || curr.next === null ) return head;
    curr.next = curr.next.next;
    return head;
}

let head1 = new ListNode(10);
head1.next = new ListNode(20);
head1.next.next = new ListNode(30);
head1.next.next.next = new ListNode(40);
head1.next.next.next.next = new ListNode(50);


console.log(deleteNodeWithValueX(head1, 30));

// expected: 10 -> 20 -> 40 -> 50
