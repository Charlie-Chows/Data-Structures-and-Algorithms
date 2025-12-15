
function ListNode(val, next = null, prev = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
}

function arrToDLL ( arr ) {
    if ( arr.length === 0 ) return null;

    let head = new ListNode(arr[0]);
    let curr = head;
    for ( let i = 1; i < arr.length; i++ ) {
        let newNode = new ListNode(arr[i]);
        curr.next = newNode;
        newNode.prev = curr;
        curr = newNode;
    }
    return head;
}


