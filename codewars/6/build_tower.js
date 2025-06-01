/***********************************************************************************************
BUILD TOWER
************************************************************************************************

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

// URL: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

************************************************************************************************
PREP
***********************************************************************************************

  PARAMETERS - a number which is the number of floors it should contain

  RESULTS - return an array where each element has 2 more stars than the one before, but the total length of each element is equal, with the rest filled with spaces
  
  maxWidth = (floors * 2) - 1
  
  EXAMPLE - 

  1 = ["*"], 
  3 = ["  *  ", " *** ", "*****"], 
  5 = ["    *    ", "   ***   ", "  *****  ", " ******* ", "*********"]
  

  PSEUDOCODE - 
  calculate maxWidth (floors * 2) - 1
  
  create result array []
  
  use a for loop, for each step from 1 to height add a new element to result that contains
  - calculate floorWidth (floor * 2) - 1
  - (maxWidth - floorWidth / 2) spaces
  - floorWidth *s
  - (mW - fW / 2) spaces
  
  return array

************************************************************************************************
MY ANSWER
***********************************************************************************************/


function towerBuilder(nFloors) {
    let result = [];
    let maxWidth = (nFloors * 2) - 1;

    function assembleFloor(i) {
        let stringArray = [];
        let starCount = (i * 2) + 1;
        spaceCount = ( maxWidth-starCount ) / 2;

        for (j = 0; j < starCount; j++) {
            stringArray.push("*");
        }
      
        for (k = 0; k < spaceCount; k++) {
            stringArray.push(" ");
            stringArray.unshift(" ");
        }

        let assembledString = stringArray.join("")
        
        return assembledString;
    }

    for (i = 0; i < nFloors; i++) {
        let assembledFloor = assembleFloor(i);

        result.push(assembledFloor);
    }

    return result;
}

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

YOU OVERTHOUGHT IT ALL

*/