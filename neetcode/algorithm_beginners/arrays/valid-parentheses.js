/**********************************************************************************************
VALID PARENTHESES
***********************************************************************************************



// URL: 

***********************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - 

RESULTS -

EXAMPLE - 

PSEUDOCODE - 

    P - a string that contains opening and closing parens/braces/brackets
    R - boolean true if all opens have a close, false if not
    E - "([])" returns true, "([)]" return false
    P - 
    create an object of the matching sides
    check if the length is odd, if it is return false
    
    loop over the string, push each element to an array
    check if element is matching close for top element on stack, if it is, pop off the final array element
    if no match, if its an opening side, add to the stack, if its a closing side, return false

    return true


************************************************************************************************
MY ANSWER / BEST ANSWER
***********************************************************************************************/

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {
        let matchingSides = {
            "(": ")",
            "{": "}",
            "[": "]"
        }
        let stack = [s[0]];

        if ((s.length % 2 !== 0) || (s.length <= 0)) {
            return false
        }

        for (let i = 1; i < s.length; i++) {
            if (s[i] === matchingSides[stack[stack.length-1]]) {
                stack.pop();
            } else if (s[i] in matchingSides) {
                stack.push(s[i]);
            } else {
                return false;
            }
        }

        return (stack.length === 0) ? true: false;        
    }
}

/***********************************************************************************************
WHAT I LEARNED
************************************************************************************************

think with data structures!!!

*/