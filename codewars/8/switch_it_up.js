/***********************************************************************************************
SWITCH IT UP
************************************************************************************************

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

// URL: https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - The input will be whole numbers between 0 and 9.

RESULTS - The output will be a string that is the number spelled as a word.

EXAMPLE - 1 = "One".

PSEUDOCODE - 

Use a switch statement.  
For each case (representing the numbers), return the number as a word.  
Break.  
Repeat for each digit.

************************************************************************************************
MY ANSWER
***********************************************************************************************/

function switchItUp(number){
    switch(number) {
        case 0: 
          return 'Zero';
          break;
        case 1: 
          return 'One';
          break;
        case 2: 
          return 'Two';
          break;
        case 3: 
          return 'Three';
          break;
        case 4: 
          return 'Four';
          break;
        case 5: 
          return 'Five';
          break;
        case 6: 
          return 'Six';
          break;
        case 7: 
          return 'Seven';
          break;
        case 8: 
          return 'Eight';
          break;
        case 9: 
          return 'Nine';
          break;
        default:
          return 'Invalid input';
          break;
    }
  }
  

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

I followed the instructions of the question, but the best answer is a very interesting way to address the problem using alternative methods.
*/