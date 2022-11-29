import { useState, useEffect } from 'react';

export default function useLocalStorage(
  key,
  defaultValue,
  str = JSON.stringify,
  prs = JSON.parse,
) {
  const [state, setState] = useState(() => {
    return prs(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, str(state));
  }, [key, state, str]);

  return [state, setState];
}