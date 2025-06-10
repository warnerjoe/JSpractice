/**********************************************************************************************
REMOVE ELEMENT
***********************************************************************************************

You are given an integer array nums and an integer val. Your task is to remove all occurrences of val from nums in-place.

After removing all occurrences of val, return the number of remaining elements, say k, such that the first k elements of nums do not contain val.

Note:

The order of the elements which are not equal to val does not matter.
It is not necessary to consider elements beyond the first k positions of the array.
To be accepted, the first k elements of nums must contain only elements not equal to val.
Return k as the final result.

Example 1:

Input: nums = [1,1,2,3,4], val = 1

Output: [2,3,4]
Explanation: You should return k = 3 as we have 3 elements which are not equal to val = 1.

Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2

Output: [0,1,3,0,4]
Explanation: You should return k = 5 as we have 5 elements which are not equal to val = 2.

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100


// URL: 

***********************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - an array of numbers, and a value which will be a number

RESULTS - an array of numbers

EXAMPLE - ([1,2,3,4], 1) would return [2,3,4]

PSEUDOCODE - 
loop over the nums from right to left
    if nums[i] is val, nums.splice(i, 1)

return nums.length

************************************************************************************************
MY ANSWER 
***********************************************************************************************/

    removeElement(nums, val) {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] === val) {
                nums.splice(i, 1)
            }
        }
        return nums.length;
    }

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

    removeElement(nums, val) {
        let k = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[k++] = nums[i];
            }
        }
        return k;
    }

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

When filtering an array, two pointer functions can work well.

*/