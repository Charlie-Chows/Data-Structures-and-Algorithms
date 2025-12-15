
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