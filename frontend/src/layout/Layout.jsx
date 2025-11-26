import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import TaskDetail from "../pages/TaskDetail";
import UpdateTask from "../pages/UpdateTask";
import Navbar from "../components/Navbar";
import AddTask from "../pages/AddTask";

const Layout = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="px-4 w-full min-h-screen flex items-center flex-col">
      <Navbar onSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Dashboard search={search} />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/update/:id" element={<UpdateTask />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </div>
  );
};

export default Layout;
