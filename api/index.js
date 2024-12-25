const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose'); // Replace import with require
const userRouter = require('./routes/user.route'); // Import the User model
const authRouter = require('./routes/auth.route'); // Import the Auth model


dotenv.config({ path: './api/.env' }); // Load environment variables
console.log("PORT from .env:", process.env.PORT); 

mongoose.connect(process.env.MONGO).then(() => console.log('Connected to MongoDB')).catch(err => console.log(err)); 

//special url encoding has to be done for @ = %40



const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//error handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ 
        success: false,
        statusCode,
        message });
})
