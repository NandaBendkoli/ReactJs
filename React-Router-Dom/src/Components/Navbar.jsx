import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 px-10 bg-slate-600">
      <h3 className="font-bold text-2xl">Navbar</h3>

      <div className="flex gap-10">
        <Link className="text-xl font-bold" to={"/"}>
          Home
        </Link>

        <Link className="text-xl font-bold" to={"/about"}>
          About
        </Link>

        <Link className="text-xl font-bold" to={"/contact"}>
          Contact
        </Link>

        <Link className="text-xl font-bold" to={"/product"}>
          Product
        </Link>
        <Link className="text-xl font-bold" to={"/courses"}>Courses</Link>
      </div>
    </div>
  );
};

export default Navbar;
