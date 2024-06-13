/***********************************************************************************************
WHAT IS BETWEEN
************************************************************************************************

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

// URL: 

************************************************************************************************
MY ANSWER / BEST ANSWER
***********************************************************************************************/

function between(a, b) {
    let output = [];
    for (let i = a; i <= b; i++) {
        output.push(i);
    }
    return output;
}