"use client";
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        // Check if `item` is valid JSON, otherwise return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // In case of error, return the initialValue
        console.error("Error parsing localStorage item:", error);
        return initialValue;
      }
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error("Error setting localStorage item:", error);
      }
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
