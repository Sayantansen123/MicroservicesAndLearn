import React, { useMemo, useState } from "react";

//useMemo cant state update
//usememo cant fetch api efficiently
//it cant manipulate dom
//usefull for caching computed values and expensive calculation
//it caches the value and recalculate when dependency array change
//remebers the prev value


//without use memo
// const ExpensiveComponent = () => {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(10);

//   const slowFunction = (num) => {
//     console.log("Expensive Calculation...");
//     return num * 2; // Simulate a heavy computation
//   };

//   const result = slowFunction(number); // Runs every render!

//   return (
//     <div>
//       <h2>Result: {result}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase Count: {count}</button>
//       <button onClick={() => setNumber(number + 1)}>Change Number</button>
//     </div>
//   );
// };

//with useMemo component redner only when number changes
const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10);
  
    const slowFunction = (num) => {
      console.log("Expensive Calculation...");
      return num * 2;
    };
  
    const memoizedResult = useMemo(() => slowFunction(number), [number]);
  
    return (
      <div>
        <h2>Result: {memoizedResult}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count: {count}</button>
        <button onClick={() => setNumber(number + 1)}>Change Number</button>
      </div>
    );
  };

export default ExpensiveComponent;