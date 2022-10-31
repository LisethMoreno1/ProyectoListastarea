import {useState} from "react";


export function useLocalStorage (key, initialState) {
  const [storedValue, setStoredValue] = useState(() => {
    try{

      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch(error){
      return initialState;
    }
  });


  const setValue = value => { 
        try {
          setStoredValue(value);
          window.localStorage.setItem(key,JSON.stringify(value));
        } catch (error) {
          console.error(error);

        }
  return [storedValue, setValue]
      }
}