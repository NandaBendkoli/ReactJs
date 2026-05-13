import React from "react";
import { useParams } from "react-router-dom";
import Navigate from "../Components/Navigate";

const CourseDetails = () => {
    const params = useParams();
    // console.log(params);
  return (
    <div>
        <Navigate/>
      <h1>{params.id} - CourseDetails</h1>
    </div>
  );
};

export default CourseDetails;
