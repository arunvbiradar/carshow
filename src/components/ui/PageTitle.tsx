import React, { ReactNode } from "react";

const PageTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-5xl mt-12 mb-10 font-normal tracking-tight capitalize">
      {children}
    </h1>
  );
};

export default PageTitle;
