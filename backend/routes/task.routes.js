//create routes for task entity
import express from "express";
import {
  addTask,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  updateTaskById,
} from "../controllers/task.controller.js";

const taskRouter = express.Router();

// In-memory task storage for demonstration purposes
taskRouter.get("/", getAllTasks);
taskRouter.get("/:id", getTaskById);
taskRouter.post("/", addTask);
taskRouter.put("/:id", updateTaskById);
taskRouter.delete("/:id", deleteTaskById);

export default taskRouter;
