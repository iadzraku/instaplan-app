import React from "react";
import Image from "next/image";
import Profile from "./Profile";
import SideNav from "./SideNav";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Your Logo</h1>
      </div>
      <div className="flex items-center">
        <p className="mr-4">Your Account</p>
        <Profile />
        <SideNav/>
      </div>
    </header>
  );
};

export default Header;
