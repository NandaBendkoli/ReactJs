import React from "react";
import Navbar from "./Navbar";
import Page1Context from "./Page1Context";

const Section01 = (props) => {
  // console.log(props.users);

  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <Page1Context users={props.users} />
      </div>
    </>
  );
};

export default Section01;
