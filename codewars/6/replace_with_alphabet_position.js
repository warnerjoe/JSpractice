/***********************************************************************************************
REPLACE WITH ALPHABET POSITION
************************************************************************************************

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// URL: https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - your function will take in a string

RESULTS - it will return a string that contains the position of the letter within the alphabet.

EXAMPLE - "sunset" would return "19 21 14 19 5 20"

"sunset's " would reutrn "19 21 14 19 5 20 19"

PSEUDOCODE - 

create a result array

loop over letters of string, 
    for each, if the charCode is between 65 and 90 push the charCode minus 64 to the result array

.join and return result array with " " between each element

************************************************************************************************
MY ANSWER / GOAT ANSWER 
***********************************************************************************************/
// A = 65, Z = 90

function alphabetPosition(text) {
    let result = [];  
    for (let i = 0; i < text.length; i++){
        let upperText = text.toUpperCase().charCodeAt(i);
        if (upperText >= 65 && upperText <= 90) {
            result.push(upperText - 64);
        }
    }
    return result.join(" ");
}
/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

Make sure when splitting off functionality to do as much as possible to reduce redundancy 

*/