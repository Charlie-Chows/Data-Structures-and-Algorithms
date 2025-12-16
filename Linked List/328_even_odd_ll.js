
var oddEvenList = function(head) {
    if ( head === null ) return null;
    let odd = head;
    let even = head.next;
    let evenHead = head.next
    while ( even && even.next ) {
        odd.next = odd.next.next;   // pointing odd pointer to next odd node 
        odd = odd.next;             // moving odd pointer to next odd node 
        even.next = even.next.next;
        even = even.next;

    }
    odd.next = evenHead;
    return head;
};


/* 

10 -> 20 -> 30 -> 40 -> 5 -> X

odd -> 10 
even -> 20 

odd.next = odd.next.next   here we are not moving odd pointer just pointed which next odd node 

10 -> 30 here we just poited still odd = 10 not 30 

odd = odd.next here we are moving odd to 30 
now we moved odd to 30 


*/