// Call
// Call() method of Function instance calls this function with a given this value and arguments provided individually
function printer(city, country) {
    console.log(`My name is ${this.name} and I'm ${this.age} years old. I live in ${city}, ${country}`)
}

const obj1 = {
    name: 'prince',
    age: '20'
}

const obj2 = {
    name: 'pruthvi',
    age: '15'
}

printer.call(obj1, 'Mumbai', 'India');
printer.call(obj2, 'Paderborn', 'Germany');

// ---------------------------------------------------------------------------------------------------------------------

// Apply
// Apply() method of function instance calls this function with a given this value and arguments provided as an array
function printer(city, country) {
    console.log(`My name is ${this.name} and I'm ${this.age} years old. I live in ${city}, ${country}`)
}

const obj3 = {
    name: 'prince',
    age: '20'
}

const obj4 = {
    name: 'pruthvi',
    age: '15'
}

printer.apply(obj3, ['Mumbai', 'India']);
printer.apply(obj4, ['Paderborn', 'Germany']);

// ---------------------------------------------------------------------------------------------------------------------

// Bind
// Bind() method of function instance creates a new function that, when called, calls this function with its this keyword set to the provided value
function printer(city, country) {
    console.log(`My name is ${this.name} and I'm ${this.age} years old. I live in ${city}, ${country}`)
}

const obj5 = {
    name: 'prince',
    age: '20'
}

const obj6 = {
    name: 'pruthvi',
    age: '15'
}

const op1 = printer.bind(obj5, 'Mumbai', 'India');
const op2 = printer.bind(obj6, 'Paderborn', 'Germany');
op1();
op2();
