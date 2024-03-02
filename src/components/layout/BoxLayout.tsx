import React, { ReactNode } from "react";

const BoxLayout = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`px-4 md:px-0 md:max-w-3xl lg:max-w-5xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default BoxLayout;
