import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TaskDetail = () => {
  const [task, setTask] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetail = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/tasks/${id}`
      );
      setTask(res.data);
    };
    fetchUserDetail();
  }, []);

  if (!task) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Task not found
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full px-4 py-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{task.title}</h2>

        <p className="text-gray-700 mb-4">{task.description}</p>

        <div className="mb-3">
          <span className="font-semibold">Status: </span>
          <span
            className={`px-2 py-1 text-white text-xs rounded-full ${
              task.status === "todo"
                ? "bg-blue-600"
                : task.status === "completed"
                ? "bg-green-600"
                : "bg-orange-600"
            }`}
          >
            {task.status}
          </span>
        </div>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Created:</span>{" "}
          {new Date(task.createdAt).toLocaleString()}
        </p>

        <p className="text-sm text-gray-600 mb-6">
          <span className="font-semibold">Updated:</span>{" "}
          {new Date(task.updatedAt).toLocaleString()}
        </p>

        <div className="flex justify-between">
          <Link
            to="/"
            className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Back
          </Link>

          <Link
            to={`/update/${id}`}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
