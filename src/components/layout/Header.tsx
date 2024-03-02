import React from "react";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-4 flex justify-between items-center sticky top-0 z-50 bg-white">
      <Logo />
      <nav>
        <ul className="flex gap-6 font-semibold">
          <li>
            <Link to="/make">Make</Link>
          </li>
          <li>
            <Link to="/model">Model</Link>
          </li>
          <li>
            <Link to="/all-models">All Models</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
