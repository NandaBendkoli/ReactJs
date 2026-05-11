import React from "react";

const App = () => {
  const userName = localStorage.setItem("user", "Nanda");
  const user = localStorage.getItem("user");
  console.log(user);

  //! storing the object because in local storage each value stored in key value pair
  // ? object.parse to convert string into obj
  // ?Json.Stringigy to convert obj into string

  const obj = {
    name: "Nanda",
    age: 23,
  };

  // Store object
  localStorage.setItem("userObj", JSON.stringify(obj));

  // Get object
  const userObj = JSON.parse(localStorage.getItem("userObj"));

  console.log(userObj);

  const arr = [10, 20];

  localStorage.setItem("arr", JSON.stringify(arr));

  const getArr = JSON.parse(localStorage.getItem("arr"));
  console.log(getArr);

  //! removed the items
  // localStorage.removeItem("user");

  // localStorage.clear();

  return (
    <>
      <h1>Local Storage</h1>
    </>
  );
};

export default App;
