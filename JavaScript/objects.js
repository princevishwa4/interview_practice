
const user = {
    name: 'ram',
    age: 26,
}

console.log(user)
user.mobile = 9876543210;
console.log(user)
delete user.age
console.log(user)



// Examples
// 1.
// const func = (function (a) {
//     delete a;
//     return a;
// })(5);
// console.log(func); // 5


// 2. add propery -> like this property
const user2 = {
    name: 'ram',
    age: 26,
    'like this property': true,
};
console.log(user2, user2['like this property']);


// 3. What's the output ?
const obj = {
    a: 'one',
    b: 'two',
    a: 'three'
}

console.log(obj); // { a: 'three', b: 'two' }


// 4. Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2
let nums = {
    a: 100,
    b: 200,
    title: 'my nums'
}

function multiplyByTwo(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyByTwo(nums);
console.log(nums);


// 5. What's the output ?
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
a[c] = 456;
console.log(a[b]); // 456
console.log(a); // { '[object object]': 456 }


// 6. What's the output ?
console.log([...'Lynda']); // ['L', 'y', 'n', 'd', 'a']


// 7. Second parameter inside an array denotes that it will going to convert only that keys into the string format rather then complete object and rest of the keys will get ignored from the output
// 8. 