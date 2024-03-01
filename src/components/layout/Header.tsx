import React from "react";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-3 flex justify-between items-center">
      <Logo />

      <nav>
        <ul className="flex gap-4 font-semibold">
          <li>
            <Link to="/make">Make</Link>
          </li>
          <li>
            <Link to="/model">Model</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
