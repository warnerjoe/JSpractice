/***********************************************************************************************
ANAGRAM DETECTION
************************************************************************************************

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

// URL: https://www.codewars.com/kata/529eef7a9194e0cbc1000255/javascript

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - two words that may or may not be anagrams

RESULTS - return a boolean based on whether or not they are an anagram

EXAMPLE - (dongle, bongle) = false

(killers, relliks) = true

PSEUDOCODE - 
if lengths don't match, return false

make lowercase version of word1 and word2

create map object for word1 and word2

loop over letters of word
    check if letter is a key in the map
    if not, add to map
    if present, add 1 to value

return boolean that compare maps

************************************************************************************************
MY ANSWER / GOAT ANSWER 
***********************************************************************************************/

const isAnagram=(t,o)=>{return[...t.toLowerCase()].sort().join('')===[...o.toLowerCase()].sort().join('');};

/***********************************************************************************************
WHAT I LEARNED
************************************************************************************************

TEAMWORK MAKE THE DREAM WORK look how tiny that one isssssss

*/