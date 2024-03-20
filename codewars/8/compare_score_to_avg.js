/***********************************************************************************************
TEMPLATE
************************************************************************************************

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

************************************************************************************************
MY ANSWER
***********************************************************************************************/

function betterThanAverage(classPoints, yourPoints) {
    let total = 0;
    for(var i = 0; i < classPoints.length; i++){
      total+=classPoints[i];
    }
    let average = (total / classPoints.length);
    if (yourPoints >= average) {
      return true;
    } else {
      return false;
    }
  }

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

*/