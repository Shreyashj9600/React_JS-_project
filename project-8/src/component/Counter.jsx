import React from "react";


const Counter = () => {


    return (
        <>
            <button onClick={() => CounterSetContext.setCount(CounterSetContext.Count + 1)}>Increment</button>
            <button onClick={() => CounterSetContext.setCount(CounterSetContext.Count - 1)}>Decrement</button>
        </>
    )
}

export default Counter;