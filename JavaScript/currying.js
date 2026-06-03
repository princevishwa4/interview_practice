// Currying is a technique where the function that takes multiple arguments is transformed into a series of function 
// that each takes a single arguments 

// Normal function
function add(a, b, c) {
    return a + b + c;
}

// Curried Function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

const addTwo = curriedAdd(2);
const addTwoAndThree = addTwo(3);
const result = addTwoAndThree(4);
console.log(result);
// OR
console.log(curriedAdd(2)(3)(4));


// Infinite Currying
function infiniteCurriedAdd(a) {
    return function(b) {
        if (!b) return a;
        return infiniteCurriedAdd(a + b);
    }
}
console.log(infiniteCurriedAdd(2)(3)(4)(5)());

// OR

const infiniteCurriedAdd2 = a => b => !b ? a : infiniteCurriedAdd2(a + b);
console.log(infiniteCurriedAdd2(2)(3)(4)(5)());



// Examples
// 1. Implement sum(2)(5)(3)
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}


// 2. 
    // evaluate('sum')(4)(2) => 6
    // evaluate('multiply')(4)(2) => 8
    // evaluate('divide')(4)(2) => 2
    // evaluate('substract')(4)(2) => 2
function evaluate(expression) {
    return function(a) {
        return function (b) {
            if (expression === 'sum') return a + b;
            else if (expression === 'multiply') return a * b;
            else if (expression === 'divide') return a / b;
            else if (expression === 'substract') return a - b;
            else return "Invalid Expression";
        }
    }
}


// 3. Infinite Currying
function infiniteCurriedAdd(a) {
    return function(b) {
        if (b) return infiniteCurriedAdd(a + b);
        return a;
    }
}
console.log(infiniteCurriedAdd(2)(3)(4)(5)());


// 4. Currying vs Partial Application
function sum(a) {
    return function (b, c) {
        return a + b + c;
    }
}
const x = sum(10);
console.log(x(4,5))
console.log(x(5,1))
// OR
console.log(sum(20)(1, 4));
// The above function is the Partial function. Partial application transforms a function into another function with small arity(number of operands or arguments that function receives)

// Currying
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}


// 5. Manupilating DOM


// 6. add(1,2,3,4) to add(1)(2)(3)(4)
function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const sum = (a, b, c, d) => a + b + c + d;
const totalSum = curry(sum);
console.log(totalSum(1)(2)(3)(4));


// Benefits
// 1. Partial Application: You can "lock in" some arguments and reuse the resulting function later.
// 2. Code Reusability: It helps create highly specific utility functions from more generic ones.
// 3. Cleaner Logic: It breaks complex functions into smaller, single-responsibility pieces that are easier to test.
// 4. Composition: It makes it easier to pipe data through multiple functions (common in Redux middleware or functional libraries like Ramda). 
