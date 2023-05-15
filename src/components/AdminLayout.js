import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AdminLayout = () => {
  return (
    <div className="relative h-full flex">
      <Navbar />

      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
