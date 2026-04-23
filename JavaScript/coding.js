const arr = [1, 2, 3, [4, 5, [6], 7], 8, 9, 10];

function flatArr(arr) {
    const output = [];
    arr.forEach((el) => {
        if (Array.isArray(el)) {
            output.push(...flatArr(el));
        } else {
            output.push(el);
        }
    });
    return output;
}

console.log(flatArr(arr));

// ---------------------------------------------------------------------------------------------------------------

const str = "hello world";
function customReverse(splittedStr) {
    const tempStr = splittedStr.split("");
    let i = 0, j = tempStr.length-1;
    while (i < j) {
        let temp = tempStr[i];
        tempStr[i] = tempStr[j];
        tempStr[j] = temp;
        i++;
        j--;
    }
    return tempStr.join("");
}
const newStr = str.split(" ").map(item => customReverse(item)).join(" ");
// OR
// const newStr = str.split(" ").map(item => item.split("").reverse().join("")).join(" ");
console.log(newStr) // olleh dlrow

// ---------------------------------------------------------------------------------------------------------------

const str2 = "hello world";
function customReverse2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
const newStr2 = customReverse2(str2)
// OR
// const newStr2 = str2.split("").reverse().join("");
console.log(newStr2) // dlrow olleh

// -------------------------------------------------------------------------------------------------

// Custom Diffing Algorithm
function getDiff(oldObj, newObj) {
  const diffs = [];

  // Check for New (CREATE) and Changed (UPDATE) properties
  for (let key in newObj) {
    if (!(key in oldObj)) {
      diffs.push({ type: 'CREATE', path: [key], value: newObj[key] });
    } else if (oldObj[key] !== newObj[key]) {
      diffs.push({ type: 'UPDATE', path: [key], value: newObj[key], oldValue: oldObj[key] });
    }
  }

  // Check for Deleted (DELETE) properties
  for (let key in oldObj) {
    if (!(key in newObj)) {
      diffs.push({ type: 'DELETE', path: [key] });
    }
  }

  return diffs;
}

const oldUser = { name: "Alice", role: "User" };
const newUser = { name: "Alice", role: "Admin", bio: "Hello!" };

console.log(getDiff(oldUser, newUser));
