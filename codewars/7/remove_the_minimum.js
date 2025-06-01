/***********************************************************************************************
REMOVE THE MINIMUM
************************************************************************************************

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest 
index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

// URL: https://www.codewars.com/kata/563cf89eb4747c5fb100001b/javascript

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - An array of numbers in no order whatsoever

RESULTS - An array of numbers in no order whatsoever however there will be one less of them

EXAMPLE - [6, 9, 5, 7, 1, 3] = [6, 9, 5, 7, 3]

PSEUDOCODE - 

minimum value varaible equal to indexOf(Math.min(...array))

array.splice(MVV, 1)


************************************************************************************************
MY ANSWER / best answer
***********************************************************************************************/

function removeSmallest(numbers) {
    let newArray = [...numbers];
    newArray.splice(numbers.indexOf(Math.min(...numbers)), 1);
    
    return newArray;
}

/***********************************************************************************************
WHAT I LEARNED
************************************************************************************************

READ THE QUESTION

*/