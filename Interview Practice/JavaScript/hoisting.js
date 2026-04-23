// Hoisting in a javascript is a phenomena where we can access the variables and functions even before we have initialized it.
// Even before the code starts executing, memory is allocated to all the variables and functions.

getName(); // Hello Hoisting
console.log(x); // undefined

var x = 4;
function getName() {
    console.log('Hello Hoisting');
}

// If we remove the variable then it will throw a reference error
getName(); // Hello Hoisting
console.log(x); // Reference error

function getName() {
    console.log('Hello Hoisting');
}

// Instead of invoking a function, if we directly console the function, it ill return the complete function body.
console.log(getName); // function getName() { console.log('Hello Hoisting') }
console.log(x); // Reference error

function getName() {
    console.log('Hello Hoisting');
}

// In case of an arrow function, the function is treated as a variable
getName(); // Type Error: getName is not a function
console.log(getName); // undefined
console.log(x); // undefined

var x = 4;

var getName = () => {
    console.log('Hello Hoisting');
}

// Let and Const declarations are also hoisted but instead of getting stored in the global scope, it get's stored in the script scope.
// Temporal Dead Zone is the time since when the let variable was hoisted and till it is initialized with some value.
// Temporal Dead Zone is the time between declaration and initialization of let and const variables.
// Accessing the let and const values even before declaring throws a Reference Error (cannot access before initialization)
// Accessing the variables inside the Temporal Dead Zone throws a Reference Error (cannot access before initialization)
