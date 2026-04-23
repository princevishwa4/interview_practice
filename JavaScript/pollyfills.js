// Polyfills is a piece of code which is used to provide the modern functionality on older browsers that do not natively support it

const arr = [1, 2, 3, 4, 5]

// Map
Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
console.log(arr.myMap(item => item * 2));


// Filter
Array.prototype.myFilter = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
console.log(arr.myFilter(item => item > 3));


// Reduce
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
console.log(arr.myReduce((acc, curr) => acc + curr, 0));


// ForEach
Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
arr.myForEach(item => console.log(item));


// Deep Clone
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(item => deepClone(item));
  
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

const original1 = [1, 2, [3, 4, 5]];
const clone1 = deepClone(original1);
clone1[2][1] = 10;
console.log(original1);
console.log(clone1)

const original2 = {
  name: "John",
  address: { city: ["New York", "Chicago"], zip: 10001 }
};

const clone2 = deepClone(original2);
clone2.address.city[1] = "Los Angeles";

console.log(original2.address.city); // Output: "New York" (Original is unchanged)
console.log(clone2.address.city);


// Method Chaining
const Calculator = {
  value: 0,
  add(n) {
    this.value += n;
    return this; // Returns the object for chaining
  },
  multiply(n) {
    this.value *= n;
    return this;
  },
  print() {
    console.log(this.value);
    return this;
  }
};

Calculator.add(5).multiply(2).print();


// Once
function once(func, context) {
  let ran;
  
  return function() {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  }
}

const greetings = once(() => console.log("Hello"));
greetings();
greetings();
greetings();
greetings();


// Memoize
function myMemoize(func, context) {
  const res = {};

  return function(...args) {
    const argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = func.call(context || this, ...args);
    }
    return res[argsCache];
  }
}

const clumsySquare = (num1, num2) => {
  for (let i = 0; i < 1000000; i++) {}
  return num1 * num2
}

const memoizedClumsySquare = myMemoize(clumsySquare);
console.time("First Call");
console.log(clumsySquare(9467, 7649));
console.log(memoizedClumsySquare(9467, 7649));
console.timeEnd("First Call");

console.time("Second Call");
console.log(clumsySquare(9467, 7649));
console.log(memoizedClumsySquare(9467, 7649));
console.timeEnd("Second Call");


// Object.create()
function myCreate(proto, properties) {
  if (proto !== Object(proto) && proto !== null) {
    throw new TypeError("Object prototype may only be an Object or null.");
  }
  function F() {}
  F.prototype = proto;
  const obj = new F();
  if (properties !== undefined) {
    Object.defineProperties(obj, properties);
  }
  return obj;
}

// Usage
const base = { greet() { return "hi"; } };
const child = myCreate(base, { name: { value: "Prince", writable: true } });
