/***********************************************************************************************
ODD OR EVEN
************************************************************************************************

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

// URL: https://www.codewars.com/kata/5949481f86420f59480000e7/javascript

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - it takes in an array where each element is a number

RESULTS - a string of whether the array's sum even or odd

EXAMPLE - [0, 2, 3] = "even"

PSEUDOCODE - 
create a sum variable

pull each element from the array and add it to the sum

modulo the sum, if 0 return "even", if not 0, return "odd"


************************************************************************************************
MY ANSWER / BEST ANSWER
***********************************************************************************************/

function oddOrEven(array) {
    return array.reduce(a, b => a + b, 0) % 2 === 0 ? "even": "odd";
}

/***********************************************************************************************
WHAT I LEARNED
************************************************************************************************

I AM A GENIUS

*/