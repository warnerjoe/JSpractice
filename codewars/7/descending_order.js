/**********************************************************************************************
DESCENDING ORDER
***********************************************************************************************

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

// URL: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

***********************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - A number

RESULTS - the same number, but with the digits in descending order

EXAMPLE - 1234 returns 4321

PSEUDOCODE - 

convert n to a string
split the string into an array
sort the array using a callback function to sort by number not by string
reverse the array
join the array
convert the string into a number

************************************************************************************************
MY ANSWER 
***********************************************************************************************/

function descendingOrder(n){
  return Number(n.toString().split("").sort((a, b) => a - b).reverse().join(""))
}

/***********************************************************************************************
BEST ANSWER
************************************************************************************************


************************************************************************************************
WHAT I LEARNED
************************************************************************************************



*/