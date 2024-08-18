import { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [Count, setCount] = useState(0)
    return (
        <CounterContext.Provider value={{ Count, setCount }}>
            {props.children}
        </CounterContext.Provider>
    )
}; 