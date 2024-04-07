// Set this variable equal to your name.
let userName = "Joe";

// If the user puts in a name, greet them, if not just say hello
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

// Enter your question here
let userQuestion = "Will Cody finish the story?";

// Display the question
console.log(`${userName} asks, "${userQuestion}"`)

// Roll a random number to determine which statement to return.
const randomNumber = Math.floor(Math.random() * 8);
console.log(`${userName} rolls a ${randomNumber}.`)

// Depending on what the dice roll is, set the eightBall variable to a statement and then log it
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(eightBall);