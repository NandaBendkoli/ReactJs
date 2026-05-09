import React from "react";
import { MoveRight } from "lucide-react";
import RigntCardContent from "./RigntCardContent";

const RightCard = (props) => {
  console.log(props);
  return (
    <>
      <div className="h-full w-60 overflow-hidden relative rounded-4xl shrink-0 ">
        <img className="h-full w-full object-cover" src={props.img} alt="" />
        <RigntCardContent id={props.id} tag={props.tag} desc={props.desc} color ={props.color} />
      </div>
    </>
  );
};

export default RightCard;
