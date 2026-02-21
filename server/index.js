// Entry point for the Express Server. Sets up middleware and mount routes, then listens through the port.

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})