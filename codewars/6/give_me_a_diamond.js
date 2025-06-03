/***********************************************************************************************
GIVE ME A DIAMOND
************************************************************************************************

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string 
from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using 
asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated 
with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to 
print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"

// URL: https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - take in a whole number, which will dictate the size of the diamond.

RESULTS - Either null if it is an inappropriate input, or a string which contains asterisks, 
spaces, and \ns

EXAMPLE -  

function(3) = " *\n***\n *""
function(5) = "  *\n ***\n*****\n ***\n  *"
function(7) = "   *\n  ***\n *****\n********\n *****\n  ***\n   *"

spaces = 3 / stars = 1
spaces = 2 / stars = 3
spaces = 1 / stars = 5
spaces = 0 / stars = 7

spaces = 2 / stars = 1
spaces = 1 / stars = 3
spaces = 0 / stars = 5

spaces = total / 2 rounded down, decrease by 1 each line
stars = start at 1, increase by 2 each line.

string = spaces + stars + \n
push to array
join array

PSEUDOCODE - 

Check if the input can be made into a diamond (if even or negative, it is null)

If it can be made into a diamond:
    Assemble the string

    Return the string

************************************************************************************************
MY ANSWER 
***********************************************************************************************/

function diamond(n){
    let resultString = ''
    let spaces = 0;
    let stars = 1;
    direction = "decreasing";

    if (n % 2 === 0 || n < 0) {
        return null;
    }

    if (n > 1) {
        spaces = Math.floor(n/2)
    }
    
    // i indicates the "line" of diamond you're on
    for (let i = 0; i < n; i++) {
        if (spaces = 0) {
            for (let i = 0; i < n; i++) {
                resultString += '*';
            }
        }
        resultString += '\n';    
    }

    return resultString;
}

/***********************************************************************************************
BEST ANSWER
************************************************************************************************


************************************************************************************************
WHAT I LEARNED
************************************************************************************************



*/