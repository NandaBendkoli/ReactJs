import React from "react";
import RightCard from "./RightCard.jsx";

const Right = (props) => {
  // console.log(props);

  return (
    <>
      <div className="right h-full w-2/3 p-6 flex flex-nowrap gap-7 overflow-x-auto">
        {props.users.map((elem, idx) => {
          return (
            <>
              <div key={idx}>
                {" "}
                <RightCard
                  img={elem.img}
                  tag={elem.tag}
                  desc={elem.desc}
                  id={elem.id}
                  color={elem.color}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Right;
