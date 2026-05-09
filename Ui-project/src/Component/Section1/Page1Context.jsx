import React from "react";
import Left from "./Left";
import Right from "./Right";

const Page1Context = (props) => {
  return (
    <>
      <div className="py-10 flex justify-between gap-10 items-center px-16 h-full">
        <Left />
        <Right users={props.users}/>
      </div>
    </>
  );
};

export default Page1Context;
