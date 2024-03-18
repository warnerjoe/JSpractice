/* 
------------------------------------------------------------------------------------------------
TEMPLATE
------------------------------------------------------------------------------------------------
Given a non-empty array of integers, return the result of multiplying the values together in order. 

*/

function grow(num){
    const total = num.reduce((arrayNet, arrayValue) => arrayNet * arrayValue, 1);
    return total;
  }

/*
---------------------------------------------
BEST ANSWER
---------------------------------------------
const grow=x=> x.reduce((a,b) => a*b);

*/