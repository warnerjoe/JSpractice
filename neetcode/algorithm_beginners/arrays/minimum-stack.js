/**********************************************************************************************
MINIMUM STACK
***********************************************************************************************

Design a stack class that supports the push, pop, top, and getMin operations.

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
Each function should run in 
O
(
1
)
O(1) time.

Example 1:

Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
Constraints:

-2^31 <= val <= 2^31 - 1.
pop, top and getMin will always be called on non-empty stacks.

// URL: 

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

class MinStack {
    constructor() {
        this.items = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items[this.items.length] = val;
    }

    /**
     * @return {void}
     */
    pop() {
        return this.items.splice(this.items.length-1, 1);
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.items);
    }
}

/***********************************************************************************************
BEST ANSWER
************************************************************************************************
class MinStack {
    constructor() {
        this.stack = [];
    }


    push(val) {
        this.stack.push(val);
    }


    pop() {
        this.stack.pop();
    }


    top() {
        return this.stack[this.stack.length - 1];
    }


    getMin() {
        const tmp = [];
        let mini = this.stack[this.stack.length - 1];

        while (this.stack.length > 0) {
            mini = Math.min(mini, this.stack[this.stack.length - 1]);
            tmp.push(this.stack.pop());
        }

        while (tmp.length > 0) {
            this.stack.push(tmp.pop());
        }

        return mini;
    }
}

************************************************************************************************
WHAT I LEARNED
************************************************************************************************



*/