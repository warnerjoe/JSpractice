/* 
p a string, that may or may not end with a number
r string with the number incremented by 1
e incrementString("string") return  "string1"
p
-check the last element of the array if it's a number using Number(element) ??
-if it is: check the character before to see if that's also a number
 - continue until not a string
-if it's not: return string += "1"

number charCode = 48 - 57

*/

function incrementString (string) {
  let splitStr = string.split("")
  let strPrefix = splitStr.filter(e => isNaN(e)).join("")
  let filteredStr = splitStr.filter(e => !isNaN(e))
  if (filteredStr.length === 0) {
    return string + "1"
  } else {
    // increment number, join together, stitch onto strPrefix
    let lastDigit = Number(filteredStr.pop())
    if (lastDigit < 9) {
      lastDigit += 1;
    } else if (lastDigit == 9) {
      filteredStr.push(lastDigit)
      let wholeNumber = Number(filteredStr.join("")) + 1
      if (wholeNumber.length != filteredStr.length) {
        let paddedNumber = wholeNumber.toString().padStart(filteredStr.length, "0")
        return strPrefix + paddedNumber;
      }
      return strPrefix + wholeNumber;
    }
    filteredStr.push(lastDigit)
    return strPrefix + filteredStr.join("")
  }
  return filteredStr;