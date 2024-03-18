/* 
------------------------------------------------------------------------------------------------
TEMPLATE
------------------------------------------------------------------------------------------------
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

*/

function repeatStr (n, s) {
    let answer = "";
    for (let i=0; i < (n); i++) {
        answer += s;
    }
    return answer;
  }

/*
---------------------------------------------
BEST ANSWER
---------------------------------------------
function repeatStr (n, s) {
  return s.repeat(n);
}
*/