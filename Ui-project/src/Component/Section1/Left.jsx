import React from "react";
import HeroContent from "./HeroContent";
import Arrow from "./Arrow";
const Left = () => {
  return (
    <>
      <div className="h-full w-1/3 bg-gray-200 p-8 flex flex-col justify-between">
      <HeroContent/>
      <Arrow/>
      </div>
    </>
  );
};

export default Left;
