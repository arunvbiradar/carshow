import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const Breadcrumb = ({
  levels,
  page,
  levelPage,
}: {
  levels: number;
  page: string | undefined;
  levelPage?: { url: string; page: string };
}) => {
  return (
    <nav className="my-3 bg-gray-50 text-sm px-4 py-2 rounded-md">
      <ul className="flex">
        <li className="text-gray-700 font-medium flex items-center after:content-['/'] after:mx-3">
          <Link to="/">
            <IoHome />
          </Link>
        </li>
        {(levels > 1 || levelPage) && (
          <li className="text-gray-700  flex items-center font-medium after:content-['/'] after:mx-3">
            <Link to={`/${levelPage?.url ?? ""}`} className="capitalize">
              {levelPage?.page}
            </Link>
          </li>
        )}
        <li className="text-gray-500 capitalize">{page?.toLowerCase()}</li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
