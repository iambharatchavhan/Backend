import React,{useState} from "react";
import { createContext } from "react";

export const counterContextApi = createContext(null);

const CounterContext = ({ children }) => {
   const [count, setCount] = useState(0)
   const [name, setName] = useState("")
  return <counterContextApi.Provider value={{count,setCount,name,setName}}>
    {children}
    </counterContextApi.Provider>;
};

export default CounterContext;
