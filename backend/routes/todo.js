const express = require("express");
const { createTodos, getTodos } = require("../controllers/todo");
const router = express.Router();

router.post("/", createTodos);
router.get("/", getTodos);

module.exports = router;
