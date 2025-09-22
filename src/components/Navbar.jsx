import { useState } from "react";
import { NavLink } from "react-router-dom";
import ColorModeToggle from "./ColorModeToggle";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkClasses = "block px-4 py-2 rounded-lg hover:bg-sky-200 dark:hover:bg-teal-700 transition";

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-sky-600 dark:bg-gray-900 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">🩺 Jarurat Care</h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" end className={({isActive})=>isActive ? `${linkClasses} bg-sky-800 dark:bg-teal-800` : linkClasses}>Home</NavLink>
            <NavLink to="/patients" className={({isActive})=>isActive ? `${linkClasses} bg-sky-800 dark:bg-teal-800` : linkClasses}>Patients</NavLink>
            <NavLink to="/about" className={({isActive})=>isActive ? `${linkClasses} bg-sky-800 dark:bg-teal-800` : linkClasses}>About</NavLink>
            <ColorModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-sky-600 dark:bg-gray-900 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-sky-500 dark:border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          <NavLink
            to="/"
            end
            onClick={() => setSidebarOpen(false)}
            className={({isActive}) => isActive ? "bg-sky-800 dark:bg-teal-800 px-4 py-2 rounded-lg" : "px-4 py-2 rounded-lg hover:bg-sky-700 dark:hover:bg-teal-700"}
          >
            Home
          </NavLink>
          <NavLink
            to="/patients"
            onClick={() => setSidebarOpen(false)}
            className={({isActive}) => isActive ? "bg-sky-800 dark:bg-teal-800 px-4 py-2 rounded-lg" : "px-4 py-2 rounded-lg hover:bg-sky-700 dark:hover:bg-teal-700"}
          >
            Patients
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setSidebarOpen(false)}
            className={({isActive}) => isActive ? "bg-sky-800 dark:bg-teal-800 px-4 py-2 rounded-lg" : "px-4 py-2 rounded-lg hover:bg-sky-700 dark:hover:bg-teal-700"}
          >
            About
          </NavLink>
          <div className="mt-4" onClick={()=>setSidebarOpen(false)}>
            <ColorModeToggle />
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
