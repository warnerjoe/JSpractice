/**********************************************************************************************
STRING INCREMENTER
***********************************************************************************************

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

// URL: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

***********************************************************************************************
PREP
***********************************************************************************************

p a string, that may or may not end with a number
r string with the number incremented by 1
e incrementString("string") return  "string1"
p
-check the last element of the array if it's a number using Number(element) ??
-if it is: check the character before to see if that's also a number
 - continue until not a string
-if it's not: return string += "1"

number charCode = 48 - 57


************************************************************************************************
MY ANSWER 
***********************************************************************************************/

function incrementString (string) {
  let splitStr = string.split("")
  let finalChars = []
  
  for (let i = (string.length) - 1 ; i >= 0; i--) {
    if (!isNaN(splitStr[i])) {
      finalChars.unshift(splitStr.pop())
    } else {
      break
    }
  }
  
  let finalNumber = (Number(finalChars.join("")) + 1).toString().padStart(finalChars.length, "0")
  return splitStr.join("") + finalNumber;
}

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function incrementString(str){
	var c = str[str.length-1];
		switch(c){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
            case '9': return incrementString(str.substring(0, str.length-1)) + 0;
            default: return str+"1";
                }
}

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

It can sometimes help to move the harder tests to the top of the list, because if you solve 
for the hardest situation, it often covers edge cases of easier situations.

I have not used isNaN much or navigating splitting off numbers and modifying them, so this was an
interesting challenge to figure out how to isolate just the numbers. 

The best answer is a very elegant solution, using a switch to find the last digit that's not a 9,
then increase that by 1 instead of isolating and working with the numbers.

*/



