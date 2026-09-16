import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= SIDEBAR ================= */}
      <Sidebar />

      {/* ================= HEADER ================= */}
      <div className="fixed top-0 left-[246px] right-4 z-50">
        <Header />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main
        className="
          ml-[246px]
          mr-4
          mt-[60px]
          min-h-[calc(100vh-60px)]
          px-6
          pb-6
        "
      >
       <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;