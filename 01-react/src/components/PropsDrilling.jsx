import React from "react";
import "./PropsDrilling.css";

const PropsDrilling = (props) => {
    console.log(props);
  return (
    <>
      <div className="parent">
        <div className="pcard">
          <img
            src={props.img}
          />
          <h2>{props.user} </h2>
          <p>Age is : {props.age}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            doloremque?
          </p>
          <button>View Profile</button>
        </div>
      </div>
    </>
  );
};

export default PropsDrilling;
