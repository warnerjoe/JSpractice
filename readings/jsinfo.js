/*

Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);

/*
Check for emptiness
importance: 5
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

let schedule = {};

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

/* 

Sum object properties
importance: 5
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function calculateSum(obj) {
    let sum = 0;
    for (person of obj) {
        sum += obj[person];
    }
    return sum;
}

calculateSum(salaries);

/* 

Multiply numeric property values by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.

*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumber(obj) {
    for (let key in obj){
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumber(menu);
console.log(menu);

/*
Two functions – one object
importance: 2
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
If it is, then provide an example of their code.
*/

let obj = {};

function A() {return obj;}
function B() {return obj;}

console.log(new A() === new B());

/*
Create new Calculator
importance: 5
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// COMMENTED OUT BECAUSE CAUSES ERROR 
function Calculator() {

    this.read() {
        this.a = +prompt("Provide a value", 0);
        this.b = +prompt("Provide a value", 0);
    };

    this.sum() { 
        return this.a + this.b 
    };
    
    this.mul() { 
        return this.a * this.b 
    };
}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
*/

