/***********************************************************************************************
NAME
************************************************************************************************

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// URL: https://leetcode.com/problems/two-sum/description/

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - An array of numbers and a number which is the target sum

RESULTS - An array containing the index of the complimentary numbers

EXAMPLE - [2, 7, 11, 15], 9 = [0, 1]

PSEUDOCODE - 

************************************************************************************************
MY ANSWER 
***********************************************************************************************/

var twoSum = function(nums, target) {
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        temp = target - nums[i];
        filtArr = nums.slice(i+1, nums.length)
        if (filtArr.includes(temp)) {
            if (nums.indexOf(nums[i]) != nums.indexOf(temp)) {
                return [nums.indexOf(nums[i]), nums.indexOf(temp)]
            } else {
                return [nums.indexOf(nums[i]), nums.lastIndexOf(temp)]
            }
        }
    }
};

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

var twoSum = function(nums, target) {
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; 
        }
        numMap.set(nums[i], i);
    }
    return []; // This line is never reached due to the problem guarantee
};

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

Using a hash map will enable the code to be more scalable and to work with larger sets of data.

*/