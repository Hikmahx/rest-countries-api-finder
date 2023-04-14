import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <div className="content">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
