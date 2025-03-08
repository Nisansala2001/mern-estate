import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'; // Import the user routes
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

app.use(express.json()); // Middleware to parse JSON
app.use('/api/users', userRoutes); // Use the user routes
app.use('/api/auth', authRoutes);// Use auth routes


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/test',(req, res)=>
          {
            res.json({
                message: 'Hello World',

            });
          }

);