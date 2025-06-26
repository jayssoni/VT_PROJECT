import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MyApp</h1>
      <div className="flex gap-4">
        <Link to="/login" className="hover:text-blue-400">Login</Link>
        <Link to="/registration" className="hover:text-blue-400">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;