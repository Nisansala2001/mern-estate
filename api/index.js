import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

mongoose
    .connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.use(express.json());

// Route middlewares
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// ❗ Error-handling middleware should come **AFTER** all routes
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

// Server start
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
