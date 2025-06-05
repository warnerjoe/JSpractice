/***********************************************************************************************
NAME
************************************************************************************************

Make a function that returns the value multiplied by 50 and increased by 6. If the value 
entered is a string it should return "Error".

// URL: https://www.codewars.com/kata/55a5bfaa756cfede78000026

***********************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - Takes in a whole number

RESULTS - Either returns "error" if it's a string, or returns n * 50 + 6

EXAMPLE - 3 = 156

PSEUDOCODE - 

check if x is a number
if it is, calculate the value
if not, return error

************************************************************************************************
MY ANSWER 
***********************************************************************************************/

function problem(x){
  if (typeof x === "number") {
    return (x * 50 + 6)
  } else {
    return "Error"
  }
}

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

Simple if statements should be reduced to ternary operators.

*/