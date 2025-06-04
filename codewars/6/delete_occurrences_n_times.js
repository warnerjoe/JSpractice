/***********************************************************************************************
DELETE OCCURENCES OF AN ELEMENT IF MORE THAN N TIMES
************************************************************************************************

Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and 
now they want to show Charlie their entire collection. However, Charlie doesn't like these 
sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. 
Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove 
numbers such that their list contains each number only up to N times, without changing the 
order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, 
without reordering.

For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take 
[1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, 
and then take 3, which leads to [1,2,3,1,2,3].

With list [20,37,20,21] and number 1, the result would be [20,37,21].

// URL: https://www.codewars.com/kata/554ca54ffa7d91b236000023/javascript

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - an array of numbers, some of which will repeat

RESULTS - you will return an array of numbers where any specific number does not repeat more 
than n times

EXAMPLE - [1,1,2,4,2,4,1,2,5,3,1,3], function(3) = [1,1,2,4,2,4,1,2,5,3,3]

PSEUDOCODE - 
 
create a cache for each number you process
create an array to add valid entries to
use a for of loop to loop over each element of array
    if count < 2, push to result array
return result array

************************************************************************************************
MY ANSWER 
***********************************************************************************************/

function deleteNth(arr,n){
  const valueCache = {};
  const result = [];
  
  for (const element of arr) {
    valueCache[element] = (valueCache[element] || 0) + 1
    if (valueCache[element] <= n) {
      result.push(element);
    }
  }
  
  return result;
}

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

I need to learn more about filter. In the best answer, it's quite clever how it uses filter to 
check each element as it's added to the cache, and if it's more than N times appearing, that
element returns false so it doesn't appear in the returned array.

*/