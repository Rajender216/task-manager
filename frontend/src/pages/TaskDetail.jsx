import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "todo",
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch existing task by ID
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/tasks/${id}`
        );

        setFormData({
          title: res.data.title,
          description: res.data.description,
          status: res.data.status,
        });
      } catch (err) {
        setError("Failed to load task");
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  // Handle input update
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit update request
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/tasks/${id}`,
        formData
      );

      setMessage("Task updated successfully");
      setTimeout(() => navigate(`/task/${id}`), 800);
    } catch (err) {
      setError("Error updating task");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );

  return (
    <div className="flex justify-center items-center w-full mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-xl w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-center">Update Task</h2>

        {/* Title */}
        <div className="flex flex-col">
          <label className="font-semibold">Title</label>
          <input
            type="text"
            name="title"
            className="border rounded-lg px-3 py-2 outline-none focus:border-green-600"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            className="border rounded-lg px-3 py-2 outline-none focus:border-green-600"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>

        {/* Status */}
        <div className="flex flex-col">
          <label className="font-semibold">Status</label>
          <select
            name="status"
            className="border rounded-lg px-3 py-2 outline-none focus:border-green-600"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In-Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
        >
          Update Task
        </button>

        {/* Messages */}
        {message && (
          <p className="text-center text-green-600 font-semibold">
            {message}
          </p>
        )}
        {error && (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        )}
      </form>
    </div>
  );
};

export default UpdateTask;
