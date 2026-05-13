import React from "react";
import { Link, Outlet } from "react-router-dom";
import Kids from "./Kids";
import Navigate from "../Components/Navigate";

const Product = () => {
  return (
    <div>
      <Navigate/>
      <div className="flex justify-center gap-10 text-2xl">
        <Link to={"/product/men"}>Men</Link>
        <Link to={"/product/women"}>Women</Link>
        <Link to={"/product/kids"}> Kids</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
