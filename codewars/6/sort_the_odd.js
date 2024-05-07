/***********************************************************************************************
SORT THE ODD
************************************************************************************************
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

************************************************************************************************
MY ANSWER
***********************************************************************************************/
function sortArray(array) {
    // Return a sorted array.
    let sortedOdds = array.filter((num) => (num % 2 === 1 || num % 2 === -1)).sort((a,b)=>a-b);
    let j = 0;
    // For Each sorted odd, 
    console.log(sortedOdds);
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        continue
      } else {
        array[i] = sortedOdds[j];
        j++;
      }
    }
    
    return array;
  }
/***********************************************************************************************
BEST ANSWER
************************************************************************************************
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
*/