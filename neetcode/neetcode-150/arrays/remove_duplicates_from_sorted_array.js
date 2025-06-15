/**********************************************************************************************
REMOVE DUPLICATES FROM SORTED ARRAY
***********************************************************************************************
Difficulty: Easy

You are given an integer array nums sorted in non-decreasing order. Your task is to remove duplicates from nums in-place so that each element appears only once.

After removing the duplicates, return the number of unique elements, denoted as k, such that the first k elements of nums contain the unique elements.

Note:

The order of the unique elements should remain the same as in the original array.
It is not necessary to consider elements beyond the first k positions of the array.
To be accepted, the first k elements of nums must contain all the unique elements.
Return k as the final result.

Example 1:

Input: nums = [1,1,2,3,4]

Output: [1,2,3,4]
Explanation: You should return k = 4 as we have four unique elements.

Example 2:

Input: nums = [2,10,10,30,30,30]

Output: [2,10,30]
Explanation: You should return k = 3 as we have three unique elements.

Constraints:

1 <= nums.length <= 30,000
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

// URL: 

***********************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - An array of numbers sorted in ascending order

RESULTS - A number, the number of unique entries in the array

EXAMPLE - [0,0,1,1,2,2,3,3] would return [0, 1, 2, 3]

PSEUDOCODE - 

************************************************************************************************
MY ANSWER 
***********************************************************************************************/

removeDuplicates(nums) {
    let numSet = new Set(nums);
    let uniqueArray = Array.from(numSet);
    for (let i = 0; i < nums.length; i++) {
        nums[i] = uniqueArray[i];
    }
    return numSet.size;
}

/***********************************************************************************************
BEST ANSWER
************************************************************************************************


************************************************************************************************
WHAT I LEARNED
************************************************************************************************



*/