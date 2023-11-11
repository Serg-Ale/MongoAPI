const Task = require("../models/TaskModel");
const asyncHandler = require("express-async-handler");

class TaskController {
  static getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  });

  static getTask = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(200).json(task);
  });

  static createTask = asyncHandler(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  });

  static updateTask = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if (!task) {
      res.status(404);
      throw new Error("Task not found");
    }
    const updatedTask = await Task.findById(id);
    res.status(200).json(updatedTask);
  });

  static deleteTask = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json({ message: "cannot delete task" });
    }
    res.status(200).json(task);
  });
}

module.exports = TaskController;
