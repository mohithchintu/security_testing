import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.router.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to mongodb')
    })
    .catch(err => {
        console.log(err)
    })

app.listen(5000, () => {
    console.log("Running on port 5000")
})

app.use('/user', userRoutes)
app.use('/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})