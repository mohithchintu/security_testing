import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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