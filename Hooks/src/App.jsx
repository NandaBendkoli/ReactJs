import React from "react";
import Notes from "./Notes-Project/Notes";
// import Hook_UseState from "./Hooks/Hook_UseState";
// import Counter from "./Hooks/Counter";
// import Usestate_Notes from "./Hooks/Usestate_Notes";
// import FormsHandling from "./FormsHandling";
// import TwoWayBinding from "./TwoWayBinding";

const App = () => {
  const formSubmitHandler = () => {
    console.log("Form is submitted!.");
  };
  return (
    <>
      {/* <Hook_UseState/> */}
      {/* <Counter/> */}
      {/* <Usestate_Notes /> */}
      {/* <FormsHandling/> */}
      {/* <TwoWayBinding/> */}

      <div className="bg-slate-950 min-h-screen">
        <Notes />
      </div>
    </>
  );
};

export default App;
