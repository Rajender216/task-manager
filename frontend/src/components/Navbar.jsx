import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="flex flex-wrap gap-4 justify-between items-center px-4 py-3 shadow-md bg-white w-full mb-4">
      <Link to="/">
        <div className="text-2xl font-bold bg-green-700 text-white px-3 py-1 rounded-xl">
          Task-Manager
        </div>
      </Link>

      <div className="w-full sm:w-1/2 lg:w-1/3">
        <input
          placeholder="Search tasks..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-green-600 transition"
          type="text"
        />
      </div>

      <Link
        to="/add"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Add Task
      </Link>
    </nav>
  );
};

export default Navbar;

