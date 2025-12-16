
function ListNode (val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
}

function deleteTailDLL ( head ) {
    if ( head === null ) return null;
    if ( head.next === null ) return null;

    let curr = head;
    while ( curr.next ) {
        curr = curr.next;
    }
    
    curr.prev.next = null;

    // optional clean up JS GC will handle even without this line head can't reach last one 
    curr.prev = null;

    return head;
}