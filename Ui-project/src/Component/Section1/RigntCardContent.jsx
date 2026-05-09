import React from "react";
import { MoveRight } from "lucide-react";

const RigntCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
      <h2 className="bg-black/30 text-white font-semibold rounded-full text-2xl h-9 w-9 flex justify-center items-center">
        {props.id}
      </h2>
      <div>
        <p className=" text-shadow-2xs leading-relaxed text-white mb-10">
          {props.desc}
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-semibold rounded-full px-2 py-2"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-semibold  rounded-full px-2 py-2"
          >
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RigntCardContent;
