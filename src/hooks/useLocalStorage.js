import { useEffect, useState } from "react";

//does: fetch or store value in local storage
export default function useLocalStorage(key, initialValue) {
  // initial value is either stored value in local storage or initial value passed from arguments
  const [value, setValue] = useState(() => {
    const localStorageStoredValue = localStorage.getItem(key);
    if (localStorageStoredValue == null) {
      if (typeof initialValue === "function") return initialValue();
      return initialValue;
    }
    return JSON.parse(localStorageStoredValue);
  });

  // whenever key or value updates, value will be stored in local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
