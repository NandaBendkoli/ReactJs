import React from 'react'

const Function = () => {
  const btnClicked = () => {
    console.log("Button is clicked!");
  };
  const mouseEnter = () => {
    console.log("Mouse is Enter");
  };

  const inputChange = (elem) => {
    console.log(elem);
  };
  return (
    <>
      <h1>Hello Sarthak</h1>
      <button
        onClick={btnClicked}
        onMouseEnter={mouseEnter}
        onDoubleClick={btnClicked}
      >
        Clike Me
      </button>
      <input
        onChange={function (elem) {
          inputChange(elem.target.value);
        }}
        type="text"
        placeholder="Type Here please"
      />
    </>
  );
};

export default Function