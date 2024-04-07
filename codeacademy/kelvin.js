// Todays temperature in Kelvin
const kelvin = 0;

// Celsius = kelvin temp minus 273
const celsius = kelvin - 273;

// Fahrenheit is 32 more than Celsius times 9/5.  Rounds it down to nearest whole number.
const fahrenheit = Math.floor((celsius * (9/5)) + 32);

// Newton temp is Celsius * 33/100
const newton = celsius * (33/100);

console.log(`The temperature is ${kelvin} degrees Kelvin.`)

console.log(`The temperature is ${celsius} degrees Celsius.`)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`)