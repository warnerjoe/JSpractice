/**********************************************************************************************
UNIQUE IN ORDER
***********************************************************************************************

Implement the function unique_in_order which takes as argument a sequence and returns a list 
of items without any elements with the same value next to each other and preserving the 
original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// URL: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

***********************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - an iterable of some sort

RESULTS - an array of the unique characters in order

EXAMPLE - uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

PSEUDOCODE - 

collect all of the iterables into an array using the spread operator
use a filter method to locate all elements that do not match the next element

************************************************************************************************
MY ANSWER / BEST ANSWER
***********************************************************************************************/

var uniqueInOrder=function(iterable){
  return [...iterable].filter((e, i) => e !== iterable[i+1]);
}

/***********************************************************************************************
WHAT I LEARNED
************************************************************************************************

It is important to keep in mind the power of the rest/spread operator, and when you are using a 
filter method with an index, use (e, i)

*/