// Prototypes are the mechanism by which JavaScript objects inherit features from one another

// Prototype chain :-
// -> Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
// -> When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

// Shadowing Properties
const myDate = new Date(1995, 11, 17);
console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};
myDate.getTime(); // 'something else!'

// Difference between __proto__ and prototype?
// -> prototype is a property of constructor functions.
// Prototype: Every object has an internal link to another object called its prototype. Property/method lookups walk up this prototype chain until null.
// -> __proto__ is an internal reference to the prototype of an object.
// Function.prototype: The object used as the prototype for instances created by that function with new.
// obj.__proto__: A (legacy) accessor to the object’s actual prototype (same as Object.getPrototypeOf(obj)).

// How do you implement classical inheritance using prototypes?
// -> Show an example using Object.create() or setting Child.prototype = Object.create(Parent.prototype).
function Parent() {}
Parent.prototype.say = function() { return "parent"; };

function Child() {}
Child.prototype = Object.create(Parent.prototype); // chain
Child.prototype.constructor = Child;               // fix constructor
Child.prototype.say = function() { return "child"; }; // override

// What is the difference between Object.create() and using a constructor function?
// -> Object.create() creates an object with a specified prototype without calling a constructor.

// Can you override methods in the prototype chain?
// -> Yes, by defining the same method on the instance or a lower-level prototype.

// What is the role of hasOwnProperty() in prototype-based objects?
// -> It checks if a property exists directly on the object, not in its prototype chain.

// What happens if you change a constructor’s prototype after creating an object?
// -> Existing objects keep the old prototype; new objects use the updated one.
