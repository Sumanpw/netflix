import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-red-600 font-bold text-2xl cursor-pointer">
          NetflixClone
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white font-medium">
          <li className="hover:text-red-600 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-600 transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-red-600 transition duration-300">
            <Link to="/products">Products</Link>
          </li>
          <li className="hover:text-red-600 transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Sign Up / Log In Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/auth"
            className="bg-red-600 hover:bg-white px-4 py-2 rounded transition duration-300 font-bold"
          >
            Sign Up
          </Link>
          <Link
            to="/auth"
            className="bg-blue-600 border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 font-bold"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
