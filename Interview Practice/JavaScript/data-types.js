// Primitive :-
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol :- It is unique and Immutable primitive value often used as an Object property key to avoid name collisions.
// When you add properties to objects that might be extended by other code (e.g., libraries or frameworks), using Symbol ensures uniqueness. 
// Advantages :-
// 1. Avoid Property Name Collisions in Objects
const ID = Symbol('id');
const user = {
  name: 'Alice',
  [ID]: 12345 // unique property
};
console.log(user[ID]); // 1234
// 2. Private or Hidden Properties
const secret = Symbol('secret');
const obj = {
  name: 'Test',
  [secret]: 'hiddenValue'
};
console.log(Object.keys(obj)); // ['name']
console.log(obj[secret]); // 'hiddenValue
// 3. Implementing Constants
const STATUS = {
  PENDING: Symbol('pending'),
  SUCCESS: Symbol('success'),
  FAILED: Symbol('failed')
};
let currentStatus = STATUS.PENDING;
if (currentStatus === STATUS.PENDING) {
  console.log('Still pending...');
}
// 4. Customizing Built-in Behavior
const collection = {
  items: [1, 2, 3],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        value: this.items[i++],
        done: i > this.items.length
      })
    };
  }
};
for (const item of collection) {
  console.log(item); // 1, 2, 3
}


// 7. BigInt

// Non-Primitive :-
// 1. Object
// 2. Array
// 3. Function



console.log(typeof "Hello");    // string
console.log(typeof 42);         // number
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object
console.log(typeof Symbol());   // symbol
console.log(typeof 10n);        // bigint
console.log(typeof {});         // object
console.log(typeof NaN);        // undefined
