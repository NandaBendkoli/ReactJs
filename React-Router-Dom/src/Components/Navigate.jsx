import React from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  let navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  const gotoBack = () => {
    navigate(-1);
  };
    const gotoNext = () => {
    navigate(+1);
  };
  return (
    <div>
      <button
        onClick={gotoHome}
        className="bg-slate-400 mt-4 ml-6 rounded-full p-2"
      >
        Go to home page{" "}
      </button>
      <button
        onClick={gotoBack}
        className="bg-slate-400 mt-4 ml-6 rounded-full p-2"
      >
        Back{" "}
      </button>
      <button
        onClick={gotoNext}
        className="bg-slate-400 mt-4 ml-6 rounded-full p-2"
      >
        Next{" "}
      </button>
    </div>
  );
};

export default Navigate;
