const todo = require("../models/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const createTodos = async(req, res) => {
    const todo = req.body;
    const newTodo = new todo(todo);
    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    }

module.exports = { getTodos };