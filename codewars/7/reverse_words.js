/***********************************************************************************************
REVERSE WORDS
************************************************************************************************

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

************************************************************************************************
MY ANSWER
***********************************************************************************************/

function reverseWords(str) {
    // Split the array into individual words
    let wordArray = str.split(" ");
    
    // Initialize the array variable for the loop
    let letterArray = [];
    
    // Iterate over word array, splitting into letters, reversing the letter, and reassembling the word
    for (let i = 0; i < wordArray.length; i++) {
      letterArray[i] = wordArray[i].split("").reverse().join("");
    }
    
    return letterArray.join(" ");
  }

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

*/