import React, { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-4xl font-medium mb-8">{children}</h2>;
};

export default SectionTitle;
