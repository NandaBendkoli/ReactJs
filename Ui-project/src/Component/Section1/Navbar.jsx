import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-16 py-6">
        <h1 className="bg-black text-white py-2 px-6 rounded-3xl uppercase tracking-wider">
          Target Audience
        </h1>
        <button className="bg-gray-400 rounded-full py-2 px-6 tracking-wider text-xm">
          Digital Banking Paltoforms
        </button>
      </div>

    </>
  );
};

export default Navbar;
