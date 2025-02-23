const express = require("express");
const { connectMongo } = require("./connection");
const cors = require("cors");
const app = express();
const port = 8000;

// Connect to MongoDB
connectMongo("mongodb://localhost:27017/todo-app").then(() => {
  console.log("Connected to MongoDB");
});

// Set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
const staticRoute = require("./routes/staticRouter");
const todoRoute = require("./routes/todo");

app.use("/", staticRoute);
app.use("/todo", todoRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}. http://localhost:${port}`);
});
