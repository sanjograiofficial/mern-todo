const todo = require("../models/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTodos = async (req, res) => {
  const body = req.body;
  if (!body.todo) {
    res.status(400).json({ message: "Todo is required" });
  }
  await todo.create({
    title: body.todo,
    completed: false,
  });

  return res.render("home", {});
};

module.exports = { getTodos, createTodos };
