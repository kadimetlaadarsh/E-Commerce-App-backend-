import mongoose from 'mongoose';
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js'; // Ensure the path is correct

// Configure env
dotenv.config();

// Database config
connectDB();

// Rest Object
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', authRoutes);

// Debugging route
app.get("/test", (req, res) => {
    res.send("Test route is working!");
});

// Rest API
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white);
});
