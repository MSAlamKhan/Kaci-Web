import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AdminLayout = () => {
  return (
    <div className="relative h-full flex">
      <Navbar />

      <div className="h-full w-full pt-9 p-3 md:px-5 bg-[#F2F2F2]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
