import React, { useState } from "react";

const TwoWayBinding = () => {
  const [title, setTitle] = useState("");

  const onChangeInput = (e) => {
    // setTitle(e.target.value);
    e.preventDefault();
    console.log(`Input submitted by the ${title}`);
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={(e)=>{
        onChangeInput(e)
      }}>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-red-400 mt-3 ml-5 p-4"
          type="text"
          placeholder="Enter Your Name"
        />
        <button className="bg-red-300 rounded-full ml-3 p-4">Submit</button>
      </form>
    </div>
  );
};

export default TwoWayBinding;
