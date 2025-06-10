/**********************************************************************************************
CONCATENATION OF ARRAYS 
***********************************************************************************************

You are given an integer array nums of length n. Create an array ans of length 2n where 
ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Example 1:

Input: nums = [1,4,1,2]

Output: [1,4,1,2,1,4,1,2]
Example 2:

Input: nums = [22,21,20,1]

Output: [22,21,20,1,22,21,20,1]
Constraints:

1 <= nums.length <= 1000.
1 <= nums[i] <= 1000


// URL: https://neetcode.io/problems/concatenation-of-array?list=blind75

***********************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - An array of numbers

RESULTS - The same array of numbers, but with each number repeated once

EXAMPLE - [1,2,3] = [1,2,3,1,2,3]

PSEUDOCODE - 
create ans array

loop over array, add each element to ans[i] and ans[i+nums.length]

return ans

************************************************************************************************
MY ANSWER / BEST ANSWER
***********************************************************************************************/

getConcatenation(nums) {
        let ans = []
        
        for (let i = 0; i < nums.length; i++) {
            ans[i] = ans[nums.length + i] = nums[i]
        }
        
        return ans
    }

/***********************************************************************************************
WHAT I LEARNED
************************************************************************************************



*/