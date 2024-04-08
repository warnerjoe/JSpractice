// Determine a random position for the runner 
let raceNumber = Math.floor(Math.random() * 1000);

// Determine if runner was an early registrant or not
let earlyRegister = true;
let runnerAge = 'yes';
let raceTime = '';

// If a runner is over 18 and registered early, they race at 9:30AM.  
// If they are an adult and did not register early, they race at 11AM.  
// If they are a minor, they race at 12:30pm.
if (runnerAge >= 18 && earlyRegister == true) {
  raceNumber += 1000;
  raceTime = '9:30am';
} else if (earlyRegister == false) {
  raceTime = '11:00am';
} else if (runnerAge < 18) {
  raceTime = '12:30pm';
} 

// If there is a race time, inform the runner what time their race starts and what position they are in.  
// If there is not a race time, some information is incorrect and they need to see the registration desk.
raceTime ? console.log(`Your race time is ${raceTime} and your position is ${raceNumber}.`) : console.log(`Please see the registration desk.`);