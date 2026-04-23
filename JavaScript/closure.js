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



