// src/pages/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-green-500 text-white p-4 border border-b-1 border-black">
      <div className="flex justify-center items-center gap-10">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/signin" className="hover:underline">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
