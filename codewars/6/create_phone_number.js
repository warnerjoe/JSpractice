/***********************************************************************************************
CREATE PHONE NUMBER
************************************************************************************************

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

************************************************************************************************
MY ANSWER
***********************************************************************************************/

function createPhoneNumber(numbers){
    function numberCompiler(digits) {
      let compiled = '';
      for (let i = 0; i < digits; i++) {
        compiled += numbers.shift();
      }
      return compiled;
    }
    
    let firstPart = numberCompiler(3);
    let secondPart = numberCompiler(3);
    let thirdPart = numberCompiler(4);
    
    return `(${firstPart}) ${secondPart}-${thirdPart}`
  }

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

*/