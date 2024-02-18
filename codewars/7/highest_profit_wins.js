/***********************************************************************************************
TEMPLATE
************************************************************************************************

Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// URL: https://www.codewars.com/kata/559590633066759614000063/train/javascript

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - An array of unsorted numbers

RESULTS - An array containing the lowest and highest number

EXAMPLE - [5, 6, 18, 1, 3] = [1, 18]

PSEUDOCODE - 

Create an empty array to hold the result
Use math.min() and math.max() to .push() the lowest and highest result
Return result

************************************************************************************************
MY ANSWER
***********************************************************************************************/

function minMax(arr){
    const result = [];
    result.push(Math.min(...arr), Math.max(...arr))
    return result;
  }
  
/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

*/