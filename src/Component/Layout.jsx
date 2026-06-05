import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
