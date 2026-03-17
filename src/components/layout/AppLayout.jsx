import React from "react";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}