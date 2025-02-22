const express = require('express');
const { connectMongo } = require('./connection');
const todoRoute = require('./routes/todo');
const app = express();
const port = 8000;

connectMongo('mongodb://localhost:27017/todo-app').then(() => {
    console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', todoRoute)
app.listen(port, () => {
    console.log(`Server is running on port ${port}. http://localhost:${port}`);
});