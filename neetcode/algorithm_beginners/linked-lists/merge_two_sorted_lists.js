/**********************************************************************************************
NAME
***********************************************************************************************

Merge Two Sorted Linked Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2.

Example 1:



Input: list1 = [1,2,4], list2 = [1,3,5]

Output: [1,1,2,3,4,5]
Example 2:

Input: list1 = [], list2 = [1,2]

Output: [1,2]
Example 3:

Input: list1 = [], list2 = []

Output: []
Constraints:

0 <= The length of the each list <= 100.
-100 <= Node.val <= 100

// URL: https://neetcode.io/problems/merge-two-sorted-linked-lists?list=blind75

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

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) {
            return list2;
        }
        if (!list2) {
            return list1;
        }

        if (list1.val <= list2.val) {
            list1.next = this.mergeTwoLists(list1.next, list2)
            return list1
        } else {
            list2.next = this.mergeTwoLists(list1, list2.next)
            return list2
        }

    }
}

/***********************************************************************************************
WHAT I LEARNED
************************************************************************************************



*/