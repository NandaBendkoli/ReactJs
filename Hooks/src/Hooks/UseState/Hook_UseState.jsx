import React from "react";
import { useState } from "react";

const Hook_UseState = () => {
  //   let a = 90;
  const [a, setA] = useState(990);
  //!  a is read only
  //! setA is write only
  const changeValue = () => {
    setA(30);
  };
  return (
    <>
      <h1>value of a is {a}</h1>
      <button onClick={changeValue}>change</button>
    </>
  );
};

export default Hook_UseState;
