import "./App.css"

import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        if (count > 0 ) setCount(count - 1);
    }

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}
