import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Navbar />

      <div className="w-full p-9 pt-7 bg-[#F2F2F2]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
