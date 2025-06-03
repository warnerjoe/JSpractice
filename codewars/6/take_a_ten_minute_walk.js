/***********************************************************************************************
TAKE A TEN MINUTE WALK
************************************************************************************************

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived 
ten minutes too early to an appointment, so you decided to take the opportunity to go for a 
short walk. The city provides its citizens with a Walk Generating App on their phones -- 
everytime you press the button it sends you an array of one-letter strings representing 
directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each 
letter (direction) and you know it takes you one minute to traverse one city block, so create 
a function that will return true if the walk the app gives you will take you exactly ten 
minutes (you don't want to be early or late!) and will, of course, return you to your starting 
point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction 
letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a 
walk, that's standing still!).

// URL: https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    //some test cases for you...
    assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
    assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
    assert.isFalse(isValidWalk(['w']), 'should return false');
    assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

  });
});

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - you will take in an array of strings, where each element is 'n', 's', 'e', or 'w'

RESULTS - The result will be a boolean, true or false depending on if you can take the walk 
in 10 mins and be back at your stating location

EXAMPLE - ['w'] would return false

PSEUDOCODE - 

create directions map

check if the array's length is greater than 10
otherwise:
loop over each element array, adding the direction to the map

check map values for n == s, e == w, if true return true, if not true return false

************************************************************************************************
MY ANSWER 
***********************************************************************************************/

function isValidWalk(walk) {
    let walkMap = {
        "n": 0,
        "s": 0,
        "e": 0,
        "w": 0
    }

    if ((walk.length != 10)) {
      return false;
    }

    for (let i = 0; i < walk.length; i++) {
        switch(walk[i]) {
            case 'n':
                walkMap.n++
                break;
            case 's':
                walkMap.s++
                break;
            case 'e':
                walkMap.e++
                break;
            case 'w':
                walkMap.w++
                break;
        }
    }

    if ((walkMap.n != walkMap.s)|| (walkMap.e != walkMap.w)) { 
      return false
    } else { 
      return true
    };
}

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

It really helps to read the prompt

*/