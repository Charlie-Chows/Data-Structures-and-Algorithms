
# LinkedList Notes


## Checklist before solving insertion/deletion

### Step 1 : What exactly is being deleted/inserted?
- head?
- tail?
- kth?
- kth from end?

### Step 2: What node do I need to STOP at?
> Almost always: the node before the one I change

- If delete → stop at prev
- If insert → stop at prev

### Step 3: Edge cases (non-negotiable)
- Empty list?
- One node?
- k out of bounds?

### Step 4: Only now write the loop
> Your loop should answer ONE question:
- “How do I reach the node just before the change?”


### Insertion & Deletion rule

**When inserting:**

```
newNode.next = prev.next
prev.next = newNode
```

**When Deleting:**
```
prev.next = prev.next.next
```


## Checklist Before Solving Multi-Bucket / Rearrangement LL Problems

### Step 1: Understand the Goal
 - Exactly what are you rearranging?
    - By value? (0/1/2, partition by pivot)
    - By index? (odd/even)

### Step 2: Decide How to Track Sub-lists
- Usually: dummy heads + tail pointers for each “bucket”
- Example buckets:
    - zeroDummy → zero
    - oneDummy → one
    - twoDummy → two
- Tail pointers help attach nodes in O(1) while iterating

### Step 3: Plan Node Movement
- Always iterate using a separate `curr` pointer
- Save the next node first, because you will detach the current node:
```js
let nextNode = curr.next;  // remember rest of the list
curr.next = null;          // detach current node
```
- Decide which bucket this node goes into, then attach:

```js
zero.next = curr;
zero = curr;
```

### Step 4: Edge Cases
- Empty list? → return null
- Single-node list? → return head
- Some buckets may be empty → handle carefully when joining:
```js
if (zeroDummy.next !== null) zero.next = oneDummy.next || twoDummy.next;
if (oneDummy.next !== null) one.next = twoDummy.next;
```

### Step 5: Joining Buckets

- Decide head of the new list:
    - First non-empty bucket
- Connect tails to next non-empty bucket
- Make sure tail of last bucket points to null

### Step 6: Iteration Loop

- Your loop should answer one question:
    - “Where does the current node belong, and how do I attach it safely?”
- Detach node first
- Attach to correct bucket
- Move curr to saved nextNode

### Step 7: Return

- Return the head of the first non-empty bucket

### Step 8 (Optional Clean-Up / Safety)

- Detaching nodes ensures no accidental connections from the original list
- Always set curr.next = null before attaching
- This prevents dragging wrong nodes from original list

### Example Mental Map for Sort 0-1-2 / Odd-Even / Partition List:
```
Original list → iterate node-by-node
        |
        v
  Detach current node
        |
        v
  Attach to correct bucket (using tail pointer)
        |
        v
  Move curr to saved nextNode
        |
        v
  Join buckets at end
        |
        v
  Return head of new list

```



