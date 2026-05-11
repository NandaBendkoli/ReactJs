import React from "react";

const FormsHandling = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form is submitted!");
  };
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <input
            className="bg-red-200 p-2 mt-8 ml-3"
            type="text"
            placeholder="Name"
          />
          <input type="text" />
          <button className="bg-red-300 p-2 mt-8 rounded-full">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FormsHandling;
