import React from 'react';

const useDebounce = (callback, delay) => {
    const timer = React.useRef(null);

    const debouncedFunc = React.useCallback((...args) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay);
    }, [callback, delay]);

    return debouncedFunc;
}

export default useDebounce