/***********************************************************************************************
TEMPLATE
************************************************************************************************
Task
Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

+…
You will need to figure out the rule of the series to complete this.

Rules
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.

Examples (Input --> Output)
n
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


************************************************************************************************
MY ANSWER
***********************************************************************************************/

function SeriesSum(n) {
    let value = 0;                  
                        
    if (n > 0) {
      value +=1;
      for ( let i = 1; i < n; i++ ) {
        value += 1/(1+(i*3));
      }
    }
    
    return value.toFixed(2);
  }
  
  
/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}

*/