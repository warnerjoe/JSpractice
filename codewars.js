/*
------------------------------------------------------------------------------------------------
CONVERT A BOOLEAN TO A STRING
------------------------------------------------------------------------------------------------
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
My Answer / Best Answer
*/

function booleanToString(b){
    return b.toString();
}

/* 
------------------------------------------------------------------------------------------------
FIND THE SMALLEST INTEGER IN AN ARRAY
------------------------------------------------------------------------------------------------
Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min.apply(Math, args);
    }
}

/*
---------------------------------------------
BEST ANSWER
---------------------------------------------
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
*/

/* 
------------------------------------------------------------------------------------------------
A NEEDLE IN THE HAYSTACK
------------------------------------------------------------------------------------------------
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle
*/
function findNeedle(haystack) {
  let position = haystack.findIndex((element) => element == 'needle');
  
  return `found the needle at position ${position}`
}

/*
---------------------------------------------
BEST ANSWER
---------------------------------------------
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
*/

























/* 
------------------------------------------------------------------------------------------------
TEMPLATE
------------------------------------------------------------------------------------------------
*/

/*
---------------------------------------------
BEST ANSWER
---------------------------------------------

*/