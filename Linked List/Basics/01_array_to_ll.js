
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function arrToLL ( arr ) {
    let head = new ListNode(arr[0]);
    let curr = head;

    // start from index 1 
    for ( let i = 1; i < arr.length; i++ ) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    let elem = head;
    while (elem) {
        console.log(elem.val);
        elem = elem.next;
    }
    return head;
}


let arr = [10, 20, 30, 40, 50, 60, 70];
arrToLL(arr);


// 10 20 30 40 50 60 70 