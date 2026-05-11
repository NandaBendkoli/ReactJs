import React from "react";
import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
};

export default Counter;
