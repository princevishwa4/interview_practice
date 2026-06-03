// A function along with it's lexical scope bundled together forms a closure.
// A closure is the combination of function bundled together with references to its surrounding state (the lexical environment).
// In simple words we can say that a closure gives an access to it's outer scope from an inner function.

function outer() {
    let counter = 0;
    return function () {
        counter++;
        console.log('Count :- ', counter);
    }
}

const increment = outer();
increment(); // 1
increment(); // 2

// Advantages :-
// 1. Data Privacy / Encapsulation
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    }
}

const counter = new createCounter();
console.log(counter.increment()) // 1
console.log(counter.getCount()) // 1
// 2. Useful for currying, memoization and event handlers

// Disadvantages :-
// 1. Memory Consumption :- Variables captured by closures are not garbage-collected until the closure itself is no longer referenced.
// 2. Potential for Memory Leaks :- If the closure are used carelessly, they can keep unnecessary data alive.
// 3. Complexity :- Can make code harder to read and debug


// Real world usecase
// 1. Rate Limiting / Click Throttling
function createRateLimiter(limit) {
    let count = 0;

    return function () {
        if (count >= limit) {
            console.log("Limit reached");
            return;
        }
        count++;
        console.log("Action allowed", count);
    };
}

const submitLimiter = createRateLimiter(3);

submitLimiter();
submitLimiter();
submitLimiter();
submitLimiter(); // Limit reached


// 2. Module level privacy (without classes)
function authManager() {
    let isAuthenticated = false;

    return {
        login() {
            isAuthenticated = true;
        },
        logout() {
            isAuthenticated = false;
        },
        isLoggedIn() {
            return isAuthenticated;
        }
    };
}

const auth = authManager();

auth.login();
auth.isLoggedIn(); // true


// 3. Memoization
// 4. React Hooks exist because of closures (important conceptually)
function useCustomCounter() {
    let count = 0;

    return () => ++count;
}


// Examples
// 1. What will be logged ?
let count = 0;
(
    function printCount() {
        if (count === 0) {
            let count = 1;
            console.log(count); // 1
        }
        console.log(count) // 0
    }
)();


// 2. Write a function that will allow this
function createBase(num1) {
    return function(num2) {
        console.log(num1 + num2);
    }
}

var addSix = createBase(6);
addSix(10);
addSix(21);


// 3. Time Optimization
function find1(index) {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
    console.log(a[index]);
}

console.time('6');
find1(6);
console.timeEnd('6');
console.time('12');
find1(12);
console.timeEnd('12');

console.log('------------------------------------------------------------')

function find2() {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
    
    return function(index) {
        console.log(a[index]);
    }
}

const closure = find2();
console.time('6');
closure(6);
console.timeEnd('6');
console.time('12');
closure(12);
console.timeEnd('12');


// 4. Block scope and setTimeout
for (var i = 0; i < 3; i++) {
    setTimeout(function log(){
        console.log(i); // 3 3 3
    }, 1000);
}

// solution 1 for above
for (let i = 0; i < 3; i++) {
    setTimeout(function log(){
        console.log(i); // 0 1 2
    }, 1000);
}

// solution 2 for above
for (var i = 0; i < 3; i++) {
    function outer(val) {
        setTimeout(function log(){
            console.log(val); // 0, 1, 2
        }, 1000);
    }
    outer(i);
}


// 5. How would you use closure to create private counter
function counter() {
    let _counter = 0;

    function increment() {
        _counter++;
    }
    function getCounter() {
        return _counter;
    }
    function decrement() {
        _counter--;
    }

    return {
        increment,
        getCounter,
        decrement
    }
}

const obj = counter();
obj.increment();
console.log(obj.getCounter());


// 7. Make this run only once
let view;
function likeTheVideo() {
    view = 'test';
    console.log(view);
}

likeTheVideo();
likeTheVideo();
likeTheVideo();
likeTheVideo();
likeTheVideo();

// Solution
let view2;
function likeTheVideo2() {
    let count = 1;
    view = 'test';
    return function() {
        if (count === 0) return;
        console.log(view);
        count--;
    }
}

const closure2 = likeTheVideo2();
closure2();
closure2();
closure2();
closure2();
