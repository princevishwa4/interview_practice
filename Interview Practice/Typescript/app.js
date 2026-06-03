// // var x = 1;
// // { let x = 2 }
// // { console.log(x) }

// const p1 = new Promise((res) => setTimeout(() => res("Slow Success"), 2000));
// const p2 = Promise.reject("Quick Failure"); // Rejects immediately
// const p3 = Promise.resolve("Fast Success");

// const promises = [p1, p3];

// // 1. Promise.all - Fails immediately because p2 rejected
// Promise.all(promises)
//   .then(values => console.log("All won't see this:", values))
//   .catch(error => console.log("All rejected with:", error)); 
//   // Output: "All rejected with: Quick Failure"

// // 2. Promise.allSettled - Waits for all and preserves order [p1, p2, p3]
// Promise.allSettled(promises)
//   .then(results => {
//     console.log("AllSettled Results (maintained order):");
//     results.forEach((res, i) => console.log(`Index ${i}:`, res));
//   });


function test2() {
  const test = () => console.log(this);
  test();
}

test2();