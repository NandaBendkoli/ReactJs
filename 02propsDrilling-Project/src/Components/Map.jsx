import React from "react";
import Card from "./Card/Card";

const Map = () => {
  //   const arr = [10, 20, 30];
  const user = [
    { name: "nanda", age: 25 },
    { name: "smitha", age: 28 },
    { name: "john", age: 22 },
  ];
  return (
    <>
      {user.map((elem) => {
        return (
          <>
            <p>{elem.name}</p>
            <p>{elem.age}</p>
          </>
        );
      })}
    </>
  );
};

export default Map;
