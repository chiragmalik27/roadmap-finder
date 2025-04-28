// 1. Load environment variables FIRST
require('dotenv').config();

// 2. Require all dependencies at the top
const express = require('express');
const mongoose = require('mongoose'); // <-- THIS MUST COME BEFORE ITS USAGE
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// 3. Debug logging
console.log('Environment Variables:');
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('NODE_ENV:', process.env.NODE_ENV);

// 4. Create express app
const app = express();

// 5. Database connection (NOW mongoose will be defined)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB connection successful!'))
  .catch(err => {
    console.error('DB connection failed:', err);
    process.exit(1);
  });
  mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    socketTimeoutMS: 45000 // Close sockets after 45s of inactivity
  });

// ... rest of your server.js code ...