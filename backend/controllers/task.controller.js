import { Task } from "../models/task.model.js";

//Add Task
export const addTask = async (req, res) => {
  try {
    const response = await Task.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: "Failed to add Task" });
  }
};
//Get All Tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};
//Get Task by ID
export const getTaskById = async (req, res) => {
  try {
    const response = await Task.findById(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Task" });
  }
};
//Update Task by ID
export const updateTaskById = async (req, res) => {
  try {
    const response = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Failed to update Task" });
  }
};
//Delete Task by ID
export const deleteTaskById = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete task" });
  }
};
