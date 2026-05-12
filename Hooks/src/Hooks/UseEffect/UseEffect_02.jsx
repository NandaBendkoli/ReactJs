import React, { useEffect, useState } from "react";

const UseEffect_02 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const changeA = () => {
    console.log("a has been changed");
  };

  const changeB = () => {
    console.log("b has been changed");
  };

  useEffect(() => {
    changeA();
  }, [a]);

  useEffect(() => {
    changeB();
  }, [b]);

  return (
    <>
      <h1>A: {a}</h1>

      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>

      <h1>B: {b}</h1>

      <button
        onClick={() => {
          setB(b + 1);
        }}
      >
        Change B
      </button>
    </>
  );
};

export default UseEffect_02;
