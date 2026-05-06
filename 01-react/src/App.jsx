import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import PropsDrilling from "./components/PropsDrilling";

const App = () => {
  return (
    <>
      {/* <Navbar/>
  <Card/>
  <Card/>
  <Card/> */}
      <PropsDrilling
        user="Nanda Bendkoli"
        age={25}
        img="https://plus.unsplash.com/premium_photo-1776981820574-8e9e3ba40109?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PropsDrilling
        user="Smitha Sharma"
        age={28}
        img="https://images.unsplash.com/photo-1600119612651-0db31b3a7baa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PropsDrilling
        user="John Doe"
        age={22}
        img="https://plus.unsplash.com/premium_photo-1746601855019-963232d70941?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
};

export default App;
