import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);
    const [showAbout, setShowAbout] = useState(false);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    function toggleAbout() {
        setShowAbout(!showAbout);
    }

    return (
        <div className="container">
            <h1 id="text">Counter App</h1>
            <h2>{count}</h2>
            <div id="btn">
                <button id="btn1" onClick={increment}>Increment</button>
                <button id="btn2" onClick={decrement}>Decrement</button>
                <button id="btn3" onClick={toggleAbout}>
                    {showAbout ? "Hide About" : "About"}
                </button>
            </div>
            <button id="resetBtn" onClick={reset}>Reset</button>
            {showAbout && (
                <p id="aboutText">
                    The Counter App allows you to increase, decrease, or reset a number 
                    by clicking the respective buttons. It's a simple demonstration of 
                    React's state management and UI interaction.
                </p>
            )}
        </div>
    );
}

export default Counter;
