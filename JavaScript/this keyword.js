this.a = 5;
console.log(this.a); // 5

// -----------------------------------------------------------------------------------------------------------------------------------------

function test() {
    console.log(this.a); // this will target it's parent object and the parent object for the test function is global object -> 5 
}
test();

// -----------------------------------------------------------------------------------------------------------------------------------------

const test2 = () => {
    console.log(this.a); // this will still target the parent object and the parent object for the test2 function is global object -> 5 
}
test2();

// -----------------------------------------------------------------------------------------------------------------------------------------
// Normal function will point to the immediate parent for the reference

let user = {
    name: 'Ram',
    age: 24,
    getDetails: function() {
        return this.name;
    }
}

console.log(user.getDetails()); // Ram


let user2 = {
    name: 'Ram',
    age: 24,
    child: {
        name: 'Lovkush',
        getDetails: function() {
            return this.name;
        }
    }
}

console.log(user2.child.getDetails()); // Lovkush


let user3 = {
    name: 'Ram',
    age: 24,
    child: {
        newName: 'Lovkush',
        getDetails: function() {
            return this.newName + ' ' + this.name;
        }
    }
}

console.log(user3.child.getDetails()); // Lovkush undefined

// -----------------------------------------------------------------------------------------------------------------------------------------
// Arrow function will try to find the normal function and then the normal function will point to the immediate parent for the reference
// this keyword value of the arrow function comes from its parent function

let user4 = {
    name: 'Ram',
    age: 24,
    getDetails: () => {
        console.log(this.name);
    }
}
user4.getDetails(); // undefined

// solution :-
// let user4 = {
//     name: 'Ram',
//     age: 24,
//     getDetails: function() {
//         const test = () => console.log(this.name);
//         test();
//     }
// }
// user4.getDetails(); // Ram


let user5 = {
    name: 'Ram',
    age: 24,
    child: {
        name: 'Lovkush',
        getDetails: () => {
            console.log(this.name);
        }
    }
}
user5.child.getDetails(); // undefined

// solution :-
// let user5 = {
//     name: 'Ram',
//     age: 24,
//     child: {
//         name: 'Lovkush',
//         getDetails: function() {
//             const test = () => console.log(this.name);
//             test();
//         }
//     }
// }
// user5.child.getDetails(); // Lovkush


let user6 = {
    name: 'Ram',
    age: 24,
    child: {
        newName: 'Lovkush',
        getDetails: () => {
            console.log(this.newName + ' ' + this.name);
        }
    }
}
user6.child.getDetails(); // undefined undefined

// solution :-
// let user6 = {
//     name: 'Ram',
//     age: 24,
//     child: {
//         newName: 'Lovkush',
//         getDetails: function() {
//             const test = () => console.log(this.newName + ' ' + this.name);
//             test();
//         }
//     }
// }
// user6.child.getDetails(); // Lovkush undefined


// Example :-
// 1. What is the Output ?
const user10 = {
    fName: 'Ram',
    getName() {
        const fName = 'Laxman';
        return this.fName;
    }
}
console.log(user10.getName()); // Ram

// 2. What is the Output ?
function makeUser() {
    return {
        name: 'John',
        ref: this,
    }
}
let user20 = makeUser();
console.log(user20.ref.name); // this will be pointing to the window object -> undefined

// solution :-
// function makeUser() {
//     return {
//         name: 'John',
//         ref() {
//             return this;
//         },
//     }
// }
// let user20 = makeUser();
// console.log(user20.ref().name); // John

// 3. What is the Output ?
const user30 = {
    name: 'Ram',
    logMessage() {
        console.log(this.name); // undefined
    }
}
setTimeout(user.logMessage, 1000); // the functionis used here as a callback rather then a method, so the method will be copied inside setTimeout and then it won't have access to the user object and since this is executing independently, it will have access to the window object

// solution :-
// const user30 = {
//     name: 'Ram',
//     logMessage() {
//         console.log(this.name); // Ram
//     }
// }
// setTimeout(function() {
//     user30.logMessage()
// }, 1000);

// 4. What is the Output ?
var length = 4;
function callback() { console.log(this.length); } // 4
const object = {
    length: 5,
    method(fn) {
        fn();
    }
}
object.method(callback);

// 5. What is the Output ?
var length = 4;
function callback() { console.log(this.length); } // 3 -> because array itself is an object so the this will point to the array for an object and we have aproperty of length in an array and the length of an array is 3
const object2 = {
    length: 5,
    method() {
        arguments[0](); // [callback, 2, 3]
    }
}
object.method(callback, 2, 3);
// 1. What is the Output ?
// 1. What is the Output ?
// 1. What is the Output ?
// 1. What is the Output ?
// 1. What is the Output ?