const Task = require('../models/Task');

const getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
};

const createTask = async (req, res) => {
    const { title, description, dueDate } = req.body;

    const task = new Task({
        title,
        description,
        dueDate,
        user: req.user._id,
    });

    const createdTask = await task.save();
    res.status(201).json(createdTask);
};

const getTaskById = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

const updateTask = async (req, res) => {
    const { title, description, dueDate, status } = req.body;

    const task = await Task.findById(req.params.id);

    if (task) {
        task.title = title || task.title;
        task.description = description || task.description;
        task.dueDate = dueDate || task.dueDate;
        task.status = status || task.status;

        const updatedTask = await task.save();
        res.json(updatedTask);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

const deleteTask = async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (task) {
        await task.deleteOne();
        res.json({ message: 'Task removed' });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

module.exports = { getTasks, createTask, getTaskById, updateTask, deleteTask };
