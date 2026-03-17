import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Mail, GraduationCap, Clock, FileText, Search, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/Home", icon: Home },
  { label: "🎨 Start with a free doodling game", path: "/FreeLesson", icon: null },
  { label: "Newsletter", path: "/Newsletter", icon: Mail },
];

const educationItems = [
  { label: "AI Academy For Kids", path: "/AIAcademy", icon: GraduationCap },
  { label: "Coming Soon", path: "#", icon: Clock, disabled: true },
];

const articleItems = [
  { label: "AI", path: "/Articles", icon: FileText },
];

export default function Sidebar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ item }) => (
    <Link
      to={item.disabled ? "#" : item.path}
      onClick={() => setMobileOpen(false)}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
        item.disabled
          ? "text-muted-foreground/50 cursor-default"
          : isActive(item.path)
          ? "bg-accent text-accent-foreground font-semibold"
          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
      }`}
    >
      {item.icon && <item.icon className="w-4 h-4 flex-shrink-0" />}
      <span>{item.label}</span>
    </Link>
  );

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-6 pb-4">
        <Link to="/Home" onClick={() => setMobileOpen(false)} className="block">
          <h1 className="text-lg font-bold text-foreground leading-tight">
            AI Literacy{" "}
            <span className="text-primary">For Kids</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Simple AI projects for curious minds
          </p>
        </Link>
      </div>

      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for..."
            className="w-full pl-9 pr-3 py-2 text-sm bg-muted/60 border border-border rounded-lg placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink key={item.path} item={item} />
        ))}

        <div className="pt-4 pb-1 px-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
            Education
          </span>
        </div>
        {educationItems.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}

        <div className="pt-4 pb-1 px-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
            Articles
          </span>
        </div>
        {articleItems.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © AI Literacy For Kids {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-card border border-border shadow-sm"
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50 transform transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 p-1 rounded-md hover:bg-muted"
        >
          <X className="w-4 h-4" />
        </button>
        <SidebarContent />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:left-0 bg-card border-r border-border">
        <SidebarContent />
      </aside>
    </>
  );
}