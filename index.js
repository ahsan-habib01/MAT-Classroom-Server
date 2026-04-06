const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const usersRoute = require('./routes/usersRoute');
app.use('/api/users', usersRoute);

app.get('/', (req, res) => {
  res.send('MAT Classroom Server is running...');
});

// Start server in local environment, but export app for Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`MAT Classroom server is running on port: ${port}`);
  });
}

module.exports = app;
