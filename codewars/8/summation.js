/***********************************************************************************************
SUMMATION
************************************************************************************************

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// URL: 

************************************************************************************************
MY ANSWER / BEST ANSWER
***********************************************************************************************/

var summation = function (num) {
    let sum = 0
    for (let i = 0; i <= num; i++){
      sum += i;
    }
    return sum;
  }
  