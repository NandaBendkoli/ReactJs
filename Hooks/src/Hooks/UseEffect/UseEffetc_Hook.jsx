import React, { useEffect, useState } from "react";

const UseEffetc_Hook = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("Hello useEffect is running!");
  }, [num]);
  return (
    <>
      <h1 className="mt-10 ml-10"> {num}</h1>

      <button
        className="bg-yellow-600 ml-10"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Run
      </button>
    </>
  );
};

export default UseEffetc_Hook;
