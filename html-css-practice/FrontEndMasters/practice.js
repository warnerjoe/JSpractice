/***********************************************************************************************
TEMPLATE
************************************************************************************************

const uniqSort = function(arr) {
    const breadcrumbs = {};
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i}`);
        if (breadcrumbs[arr[i]]) {
            result = false
        } else {
            breadcrumbs[arr[i]] = true;
        }
    }

    return arr.sort((a, b) => a - b);
}

uniqSort([4,2,2,3,2,2,2]);

// URL: https://frontendmasters.com/courses/practical-algorithms/unique-sort-exercise/

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - An array of numbers

RESULTS - An array of unique numbers, sorted 

EXAMPLE - [4, 2, 3, 2, 2,  2] => [2, 3, 4]

PSEUDOCODE - iterate over array
check if element is in breadcrumbs, if not add it
return arr with elements of object

************************************************************************************************
MY ANSWER
***********************************************************************************************/

const uniqSort = function(arr) {
    const breadcrumbs = {};
    const result = [arr[0]];

    for (let i = 0; i < arr.length; i++) {
        if (!breadcrumbs[arr[i]]) {
            result.push(arr[i]);
            breadcrumbs[arr[i]] = true;    
        }
    }
    return result.sort((a, b) => a - b);
}

uniqSort([4,2,2,3,2,2,2]);

/***********************************************************************************************
WHAT I LEARNED
************************************************************************************************

I learned how to use cacheing to reduce the Big O score of your algorithm.
*/