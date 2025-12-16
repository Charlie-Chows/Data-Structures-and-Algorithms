
var addTwoNumbers = function (l1, l2) {
    let dummyNode = new ListNode(-1);
    let carry = 0;
    let curr = dummyNode;
    while (l1 || l2 || carry) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = sum % 10;
        curr.next = new ListNode(sum);
        curr = curr.next;
    }
    return dummyNode.next;
};
