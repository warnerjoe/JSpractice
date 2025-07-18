/***********************************************************************************************
SENTENCE SMASH
************************************************************************************************

Write a function that takes an array of words and smashes them together into a sentence and 
returns the sentence. You can ignore any need to sanitize words or add punctuation, but you 
should add spaces between each word. Be careful, there shouldn't be a space at the beginning or 
the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
words = ['hello', 'world', 'this', 'is', 'great']
smash(words) # returns "hello world this is great"
Assumptions
You can assume that you are only given words.
You cannot assume the size of the array.
You can assume that you do get an array.
What We're Testing
We're testing basic loops and string manipulation. This is for beginners who are just learning 
loops and string manipulation.

Disclaimer
This is for beginners so we want to test basic loops and string manipulation. Advanced users 
should easily be able to do this in one line.

// URL: 

***********************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - An array of words

RESULTS - A string with all of the words smashed together as a sentence

EXAMPLE - ["you", "are", "cool"] returns "you are cool"

PSEUDOCODE - if you wanna get fancy you could loop over the array and concatenate each onto the
empty string you created or you could just use .join() if you prefer brevity. Clearly I do not.

************************************************************************************************
MY ANSWER / BEST ANSWER
***********************************************************************************************/
function smash (words) {
   return words.join(" ")
};

/***********************************************************************************************
WHAT I LEARNED
************************************************************************************************

It helps to know your array and string methods!

*/