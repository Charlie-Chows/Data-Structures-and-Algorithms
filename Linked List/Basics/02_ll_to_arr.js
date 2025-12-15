
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function LLToArr(head) {
    let arr = [];
    let curr = head;

    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}

let head = new ListNode(10);
head.next = new ListNode(20);
head.next.next = new ListNode(30);
head.next.next.next = new ListNode(40);

console.log(LLToArr(head)); // [10, 20, 30, 40]
