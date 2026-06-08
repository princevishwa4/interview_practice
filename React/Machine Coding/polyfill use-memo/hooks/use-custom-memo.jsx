import React, { useEffect, useRef } from 'react';

function isEqual(oldDeps, nextDeps) {
  if (oldDeps === null) return false;
  if (oldDeps.length !== nextDeps.length) return false;
  for (let i = 0; i < oldDeps.length; i++) {
    if (oldDeps[i] !== nextDeps[i]) {
      return false;
    }
  }
  return true;
}

function useCustomMemo(cb, deps) {
  // variable or state => to cache value
  const memoisedRef = useRef(null);
  // compare changes (old and new) in deps and update value
  if (!memoisedRef.current || !isEqual(memoisedRef.current.deps, deps)) {
    memoisedRef.current = {
      value: cb(),
      deps,
    };
  }
  // cleanup
  useEffect(() => {
    return () => (memoisedRef.current = null);
  }, []);
  // return memoised value
  return memoisedRef.current.value;
}

export default useCustomMemo;
