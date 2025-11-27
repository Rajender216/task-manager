import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ search }) => {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  const fetchData = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/tasks`
    );
    setTasks(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const res = confirm("Do you want to delete it?");
    if (!res) return;
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/tasks/${id}`);
    fetchData();
  };

  // Search filter
  let filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
  );

  // Status filter
  if (statusFilter !== "all") {
    filteredTasks = filteredTasks.filter(
      (task) => task.status === statusFilter
    );
  }

  // Sorting filter
  filteredTasks = filteredTasks.sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "todo":
        return "bg-blue-600";
      case "completed":
        return "bg-green-700";
      default:
        return "bg-orange-600";
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 py-6">
      <div className="flex justify-between items-center w-full max-w-3xl mb-4">
        <h2 className="text-2xl font-bold">Tasks</h2>

        {/* Filters */}
        <div className="flex gap-3">
          <select
            className="border px-3 py-2 rounded-lg"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="todo">Todo</option>
            <option value="in-progress">In-Progress</option>
            <option value="completed">Completed</option>
          </select>

          <select
            className="border px-3 py-2 rounded-lg"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      <ul className="flex flex-col gap-4 w-full max-w-3xl">
        {filteredTasks.map((task) => (
          <li
            key={task._id}
            className="flex flex-wrap justify-between items-start border shadow-sm rounded-xl p-4 "
          >
            <div className="w-full sm:w-1/2 font-medium overflow-hidden">
              {task.title}
              <span
                className={`${getStatusColor(
                  task.status
                )} text-white px-2 py-1 text-xs rounded-full ml-2`}
              >
                {task.status}
              </span>
            </div>

            <div className="flex gap-2 mt-3 sm:mt-0">
              <Link
                to={`/task/${task._id}`}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Info
              </Link>

              <Link
                to={`/update/${task._id}`}
                className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Update
              </Link>

              <button
                className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
