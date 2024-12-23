const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './api/.env' }); // Load environment variables
console.log("PORT from .env:", process.env.PORT); 

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
