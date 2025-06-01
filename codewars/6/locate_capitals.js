/***********************************************************************************************
FIND THE CAPITALS
************************************************************************************************

Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]

// URL: https://www.codewars.com/kata/539ee3b6757843632d00026b

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - a word with varying capitalization

RESULTS - return an array with the location of all capital letters

EXAMPLE - GiNGer = [0, 2, 3]

PSEUDOCODE - 

Create an empty array

Loop over the letters, checking if each letter is equal to that letter when uppercased

If yes: add it to the array

Return the array

************************************************************************************************
MY ANSWER
***********************************************************************************************/

var capitals = function (word) {
    let result = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            result.push(i);
        }
    }

    return result;
};

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
        if(word[i].toUpperCase() == word[i]) caps.push(i);
    }

    return caps;
};

************************************************************************************************
WHAT I LEARNED
************************************************************************************************
I was not aware you could use an if statement and it's outcome in that form

if(condition) body;

*/