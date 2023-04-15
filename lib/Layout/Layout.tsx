import React from "react";
import Navbar from "../Components/Navbar/Navbar";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
