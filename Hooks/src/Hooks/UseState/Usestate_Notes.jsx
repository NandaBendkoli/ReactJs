import React from "react";
import { useState } from "react";

const Usestate_Notes = () => {
  const [a, setA] = useState(10);
  const changeValue = () => {
    console.log("before", a);
    setA(20);
    console.log("after", a);
  };
  const [obj, setObj] = useState({ user: "Nanda", age: 26 });
  const changeValueofObj = () => {
    // const newObj = { ...obj };
    // console.log(newObj);
    // ((newObj.user = "Neha"), (newObj.age = 23));
    // setObj(newObj);

    // !second method
    setObj((prev) => ({ ...prev, age: 90, user: "smitha" }));
  };

  const [arr, setArr] = useState([10, 20, 30, 40]);

  const changeValueofArr = () => {
    // const newArr = [...arr];
    // newArr.push(122, 123, 124, 135);
    // setArr(newArr);

    // !second method
    setArr((prev) => ({ ...prev }, [111, 122]));
  };

  const [num, setNum] = useState(10);

  const changeValueNum = () => {
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);

    //! this will not update the 10 at 3 time beacuse it will goes to confuse

    // ! this is called batch update and better solution use optimizhed way

    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <>
      {/* <p>value of a just after async func a : {a}</p> */}
      {/* <p>
        Object user:{obj.user} age : {obj.age}
      </p> */}
      {/* <p>Arr is ; {arr}</p> */}
      <p>Num is {num}</p>
      <button onClick={changeValueNum}>Change</button>
    </>
  );
};

export default Usestate_Notes;

//? -------------------------------------------------------------
//! 1.---->output of this is (syn operation)
//? before 10
//? after 10
// * the value of a is reflected in ui but dont change in console beacuse the console just run after the async
// * operation thats why it will update in background and shown in ui alos but just after asycn operaton
// * in console it not print

//? second if u do like this
//! const changeValue2 = () => {
//! setA(a); //! here react does not re-render beacuse it knew thay this is the initial value it already in ui
// ! so we dont re render this if ther is new value then only do it other wise dont
