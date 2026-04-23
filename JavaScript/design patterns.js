
// Module Pattern -> The Module Pattern in JavaScript is a design pattern used to mimic the concept of classes by wrapping a set of variables and functions into a single object. 

const CounterModule = (function() {
  // Private variable
  let count = 0;

  // Private function
  const log = (msg) => console.log(msg);

  return {
    // Public methods
    increment: function() {
      count++;
      log(`Count is now: ${count}`);
    },
    reset: function() {
      count = 0;
      log("Counter reset.");
    },
    getCount: function() {
      return count;
    }
  };
})();

CounterModule.increment(); // Count is now: 1
console.log(CounterModule.getCount()); // 1
console.log(CounterModule.count); // undefined (it's private)
