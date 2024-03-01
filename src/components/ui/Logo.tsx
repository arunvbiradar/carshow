import React from "react";
import { TiFlash } from "react-icons/ti";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center uppercase font-black">
        <span className="text-xl tracking-tighter">car</span>
        <TiFlash className="text-3xl -ml-1 -mr-2 text-orange-600" />
        <span className="text-xl tracking-tighter">how</span>
      </div>
    </Link>
  );
}

export default Logo;
