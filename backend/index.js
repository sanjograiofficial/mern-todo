const express = require("express");
const { connectMongo } = require("./connection");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { checkForAuthCookie } = require("./middlewares/auth");

const app = express();
const port = 8000;

// Connect to MongoDB
connectMongo("mongodb://localhost:27017/todo-app").then(() => {
  console.log("Connected to MongoDB");
});

// Set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthCookie("token"));

// Router
const staticRoute = require("./routes/staticRouter");
const todoRoute = require("./routes/todo");
const userRoute = require("./routes/user");

app.use("/", staticRoute);
app.use("/todo", todoRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}. http://localhost:${port}`);
});
