// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const reviewRoutes = require('./routes/reviewRoutes');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'sample_mflix' //Added for database
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error: ', err)); //error made 

// Use routes
app.use('/api/reviews', reviewRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
