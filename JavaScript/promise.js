// Promise is an object which represents the eventual completion or failure of an asynchronous operation and its resulting value
// States :- Fulfilled, Pending, Reject,
const customPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('Resolved Promise')
    }, 2000)
});

customPromise.then(res => console.log(res)).catch(err => console.log(err));

// -------------------------------------------------------------------------------------------------------------------

// Promise.all
// It waits for all fulfillments or the first rejection

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5'
    // 'https://jsonplaceholder.typicode.com/posts/500000'
];

const fetchData = async () => {
    try {
        const responses = await Promise.all(urls.map(async (url) => {
            const res = await fetch(url);
            if (!res.ok) throw new Error('Error')
            return res;
        }));
        // console.log('responses :- ', responses)
        const data = await Promise.all(responses.map(response => response.json()));
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

fetchData();

// -------------------------------------------------------------------------------------------------------------------

// Promise.allSettled
// 


const urls2 = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/post/5'
];

const fetchDataSettled = async () => {
    const results = await Promise.allSettled(urls2.map(url => fetch(url)));

    const finalData = [];
    const errors = [];
    // console.log('results :- ', results)

    for (const result of results) {
        if (result.status === 'fulfilled') {
            const res = result.value;
            if (res.ok) finalData.push(await res.json());
            else errors.push(`HTTP error ${res.status} for ${res.url}`)
        } else {
            errors.push(result.reason);
        }
    }

    console.log('Results (including errors):', finalData, errors);
};

fetchDataSettled();

// -------------------------------------------------------------------------------------------------------------------

// Promise.race
// Returns the result of first promise that settles (fulfilled or rejected)

const p1 = new Promise((resolve) => setTimeout(() => resolve('First'), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve('Second'), 2000));
const p3 = new Promise((_, reject) => setTimeout(() => reject('Error'), 500));

Promise.race([p1, p2, p3])
  .then(result => console.log('✅ Winner:', result))
  .catch(error => console.log('❌ Failed first:', error));

// -------------------------------------------------------------------------------------------------------------------

// Promise.any
// Returns the first fulfilled promise. Ignores rejections unless all promises reject, in that case it throws an AggregateError.

const p4 = new Promise((_, reject) => setTimeout(() => reject('Fail 1'), 500));
const p5 = new Promise((resolve) => setTimeout(() => resolve('Success 2'), 1000));
const p6 = new Promise((resolve) => setTimeout(() => resolve('Success 3'), 1500));

Promise.any([p4, p5, p6])
  .then(result => console.log('✅ First success:', result))
  .catch(error => console.log('❌ All failed:', error))
