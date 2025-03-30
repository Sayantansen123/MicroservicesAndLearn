import React, { useState, useRef, useEffect } from "react";


const Counter = () => {
  const [count, setCount] = useState(0);
  const refValue = useRef(0); // Using useRef

  console.log("Component re-rendered!"); //Logs on every re-render

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Ref Value: {refValue.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => refValue.current++}>Increase Ref</button>
    </div>
  );
};

const PreviousStateExample = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(0); //Stores previous count
  
    useEffect(() => {
      prevCountRef.current = count; //Update ref AFTER render
    }, [count]);
  
    return (
      <div>
        <h2>Current Count: {count}</h2>
        <h2>Previous Count: {prevCountRef.current}</h2>
        <button onClick={() => setCount(count + 6)}>Increase</button>
      </div>
    );
  };



export {Counter,PreviousStateExample};
