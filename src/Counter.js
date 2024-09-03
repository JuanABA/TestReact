import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Count: {counter}</h1>
      <button onClick={Increment}>Increment: </button>
    </>
  );
};

export default Counter;
