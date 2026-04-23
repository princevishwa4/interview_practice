// A shallow copy duplicates only the top-level properties of an object.
// If a property is a primitive (string, number, boolean), its value is copied.
// If a property is an object or array, only the reference is copied, not the actual nested data.
// This means changes in nested objects affect both the original and the copy.

const original = {
  name: "Alice",
  details: { age: 25, city: "Wonderland" }
};

// Shallow copy using spread operator
const shallowCopy = { ...original };
// Modify nested property
shallowCopy.details.city = "Looking Glass";
console.log(original.details.city); // Output: "Looking Glass"


// ----------------------------------------------------------------------------------------------------------------------


// A deep copy creates a completely independent clone, including all nested objects and arrays.
// Changes in the copy do not affect the original.

const original2 = {
  name: "Alice",
  details: { age: 25, city: "Wonderland" }
};

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original2)); // OR structuredClone()
// Modify nested property
deepCopy.details.city = "Looking Glass";
console.log(original2.details.city); // Output: "Wonderland"


// JSON.parse(JSON.stringify()) vs structuredClone()
// Feature                  JSON.parse(JSON.stringify())        structuredClone()
// Circular References	    Throws Error	                      Supported (Clones correctly)
// Dates	                  Converts to string	                Preserves as Date object
// Map & Set	              Lost (empty object {})	            Supported
// Undefined	              Value is lost (key removed)	        Preserved
// NaN / Infinity	          Becomes null	                      Preserved
// Functions	              Discarded	                          Throws Error

