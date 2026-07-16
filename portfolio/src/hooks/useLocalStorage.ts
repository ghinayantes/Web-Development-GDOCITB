import { useEffect, useState } from 'react';

/**
 * useLocalStorage<T>
 *
 * A generic, type-safe wrapper around localStorage that behaves like
 * React's own useState, but persists the value across page reloads.
 *
 * T is inferred from the initialValue you pass in, so callers get full
 * type-checking on both the returned value and the setter:
 *
 *   const [theme, setTheme] = useLocalStorage<'dark' | 'light'>('theme', 'dark');
 *   const [count, setCount] = useLocalStorage<number>('count', 0);
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`useLocalStorage: failed to read key "${key}"`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    setStoredValue((prev) => {
      const nextValue = value instanceof Function ? value(prev) : value;

      try {
        window.localStorage.setItem(key, JSON.stringify(nextValue));
      } catch (error) {
        console.warn(`useLocalStorage: failed to write key "${key}"`, error);
      }

      return nextValue;
    });
  };

  // Keep state in sync if the same key changes in another tab/window.
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        try {
          setStoredValue(JSON.parse(event.newValue) as T);
        } catch {
          // ignore malformed values from other tabs
        }
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key]);

  return [storedValue, setValue];
}
