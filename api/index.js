const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose'); // Replace import with require
const userRouter = require('./routes/user.route'); // Import the User model


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

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
