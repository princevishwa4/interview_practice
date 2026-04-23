// Fetch with timeout
function fetchDataWithTimeout(url, timeout) {
    return new Promise((resolve, reject) => {
        const controller = new AbortController();
        const { signal } = controller;
        let timerId = null;
        
        fetch(url, { signal })
            .then(res => res.json())
            .then((res) => {
                if (timerId) clearTimeout(timerId);
                resolve(res);
            })
            .catch(reject)

        timerId = setTimeout(() => {
            controller.abort();
        }, timeout)
    })
}

fetchDataWithTimeout('https://dummyjson.com/todos/1', 1000)
    .then(res => console.log(res))
    .catch(err => console.log(err))


// -----------------------------------------------------------------------------------------------------------


// Fetch with auto retry
function fetchWithAutoRetry(fetcher, maxRetries) {
    return new Promise((resolve, reject) => {
        let retries = 0;
        function caller() {
          console.log('retries :- ', retries)
            fetcher()
                .then(res => resolve(res))
                .catch(err => {
                    if (retries < maxRetries) {
                        retries++;
                        caller();
                    } else {
                        reject(err)
                    }
                })
        }
        retries = 1;
        caller();
    })
}

async function fetchPosts() {
    try {
        console.log('fetching')
        const jsonRes = await fetch('https://jsonplaceholder.typicode.com/post');
        const res = await jsonRes.json();
        console.log(res);
        return res;
    } catch (err) {
        console.log(err)
    }
}

fetchWithAutoRetry(fetchPosts, 5);
