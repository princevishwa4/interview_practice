// --------------------------------------------------- Map -------------------------------------------------------------
const map = new Map();
// Setting values in Map
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a")); // 1
console.log(map.get("b")); // 2
console.log(map.get("c")); // 3

// Updating value in Map
map.set("a", 97);
console.log(map.get("a")); // 97

// Size of Map
console.log(map.size); // 3

// Deleting key from Map
map.delete("b");
console.log(map.size); // 2

// Check, fetch values from Map through Keys
contacts.has("a"); // true
contacts.get("d"); // undefined

// Empty Map
map.clear();
console.log(map.size); // 0

// Iterator
const iterator = map.entries();
console.log(iterator.next().value); // ['a', 1]
console.log(iterator.next().value); // ['b', 2]

// ForEach
map.forEach((value, key) => {
    console.log(`m[${key}] = ${value}`);
});
// Expected output: "m[a] = 1"
// Expected output: "m[b] = 2"
// Expected output: "m[c] = 3"

// Get Keys
const keysIterator = map.keys();
console.log(keysIterator.next().value); // a
console.log(keysIterator.next().value); // b
console.log(keysIterator.next().value); // c

// Get Values
const valuesIterator = map.keys();
console.log(valuesIterator.next().value); // 1
console.log(valuesIterator.next().value); // 2
console.log(valuesIterator.next().value); // 3


// --------------------------------------------------- WeakMap -------------------------------------------------------------

