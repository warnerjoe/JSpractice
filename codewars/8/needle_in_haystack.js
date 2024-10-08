/***********************************************************************************************
A NEEDLE IN THE HAYSTACK
************************************************************************************************

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle

// URL: 

************************************************************************************************
MY ANSWER
***********************************************************************************************/

function findNeedle(haystack) {
    let position = haystack.findIndex((element) => element == 'needle');
    
    return `found the needle at position ${position}`
  }
  
/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

*/