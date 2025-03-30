import React, { useCallback, useState } from "react";

const Button = ({ onClick }) => {
  console.log("Button re-rendered!");
  return <button onClick={onClick}>Click Me</button>;
};

const Buttoned = React.memo(({ onClick }) => {
    console.log("Button re-rendered!");
    return <button onClick={onClick}>Click Me</button>;
  });

const CallBackNotUsed = () => {
  const [count, setCount] = useState(0);
  //every time a re render happens the handle click renders again so the Button component renders again
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Button onClick={handleClick} />
    </div>
  );
};

const CallBackUsed = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = useCallback(() => {
      console.log("Button clicked!");
    }, []); // ✅ Function is now cached
  
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <Buttoned onClick={handleClick} />
      </div>
    );
  };

export  {CallBackNotUsed,CallBackUsed};