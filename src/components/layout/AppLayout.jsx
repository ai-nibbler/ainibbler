import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:ml-64">
        <div className="max-w-2xl mx-auto px-6 py-8 lg:py-12 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}