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
            <Link to="/all-makes">Makes</Link>
          </li>
          <li>
            <Link to="/all-manufacturers">Manufacturers</Link>
          </li>
          <li>
            <Link to="/all-specifications">Specifications</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
