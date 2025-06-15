/**********************************************************************************************
DESIGN SINGLY LINKED LIST
***********************************************************************************************

Design a Singly Linked List class.

Your LinkedList class should support the following operations:

LinkedList() will initialize an empty linked list.
int get(int i) will return the value of the ith node (0-indexed). If the index is out of bounds, return -1.
void insertHead(int val) will insert a node with val at the head of the list.
void insertTail(int val) will insert a node with val at the tail of the list.
bool remove(int i) will remove the ith node (0-indexed). If the index is out of bounds, return false, otherwise return true.
int[] getValues() return an array of all the values in the linked list, ordered from head to tail.
Example 1:

Input: 
["insertHead", 1, "insertTail", 2, "insertHead", 0, "remove", 1, "getValues"]

Output:
[null, null, null, true, [0, 2]]
Example 2:

Input:
["insertHead", 1, "insertHead", 2, "get", 5]

Output:
[null, null, -1]
Note:

The index int i provided to get(int i) and remove(int i) is guaranteed to be greater than or equal to 0.

// URL: https://neetcode.io/problems/singlyLinkedList

***********************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - 

RESULTS -

EXAMPLE - 

PSEUDOCODE - 

************************************************************************************************
MY ANSWER 
***********************************************************************************************/

class ListNode {
    constructor(val, nextNode) {
        this.val = val
        this.next = nextNode
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1)
        this.tail = this.head
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i = 0;
        let curr = this.head.next;
        while (curr) {
            if (i === index) {
                return curr.val
            }
            i++ 
            curr = curr.next
        }
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new ListNode(val)
        newNode.next = this.head.next
        this.head.next = newNode
        if (!newNode.next) {
            this.tail = newNode
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new ListNode(val)
        this.tail = this.tail.next
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i = 0
        let curr = this.head
        while (i < index && curr) {
            i++
            curr = curr.next
        }

        if (curr && curr.next) {
            if (this.tail === curr.next) {
                this.tail = curr
            }
            curr.next = curr.next.next
            return true
        }
        return false
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let curr = this.head.next
        let res = []
        while (curr) {
            res.push(curr.val)
            curr = curr.next
        }
        return res
    }
}

/***********************************************************************************************
WHAT I LEARNED
************************************************************************************************



*/