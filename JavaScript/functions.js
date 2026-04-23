// What are First Class Function or First Class Citizens ?
// The ability of function to be used as a values and can be passed as an argument to the another function and can be returned from the function, this ability is known as First Class Function. 

// Function Declaration or Function Statement
function statement() {
    console.log('Function Statement')
}

// Function Expression
var expression = function() {
    console.log('Function Expression')
}

// Anonymous Function
// function () {
//     console.log('Anonymous Function')
// }

// Named Function Expression
var expression = function named() {
    console.log('Named Function Expression')
}

// Arrow Function
// 1. Syntax
const sayHello = () => console.log('Arrow Function');
// 2. 'arguments' keyword ==> This are not available in the arrow functions
// 3. Hoisting ==> If we will try to access the function before initialization then it will throw reference error because in the skimming process the variable is assigned with the undefined
// 4. This keyword ==> Arrow function is global scoped so "this" in the arrow function will going to point the window object, while in the normal function scenario it will going to point the parent/caller

// Callback Function
function callme(cb) {
    cb();
}

function passedFunction() {
    console.log('Callback Function');
}

callme(passedFunction);

// HOF ==> A function which accepts another function as an params or returns a function from it is known as HOF
function callme(cb) {
    cb();
}

function passedFunction() {
    console.log('Calling from HOF');
}

callme(passedFunction);

// Pure Function ==> A function which does not have any side effects and will always give the same output for the same input. A pure function will only going to operate on the input and will generate the output. 
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));


// Generator Function
// Iterators :- Iterators brings the concept of iteration directly into the core language and provide a mechanism for customizing the behaviour of for...of loops.
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    return {
        next() {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true };
        }
    }
}

const iter = makeRangeIterator(1, 10, 2);

let result = iter.next();
while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    result = iter.next();
}

// Generators :- Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. 
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

// simple
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
