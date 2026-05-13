import React from "react";
import Navigate from "../Components/Navigate";

const NotFound = () => {
  return (
    <div>
      <Navigate/>
      <h1 className="text-red-600">404 | Page Not Found</h1>
    </div>
  );
};

export default NotFound;
