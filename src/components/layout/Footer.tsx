import React from "react";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-100 p-4 rounded-t-md mt-8">
      <div className="flex justify-between">
        <Logo />
        <span className="">© {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
