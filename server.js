require('dotenv').config();  
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json()); // ✅ Parses JSON requests
app.use(cors()); // ✅ Allows frontend requests
app.use(express.static(path.join(__dirname, 'public')));

// Debugging Middleware (Logs Every Request)
app.use((req, res, next) => {
    console.log(`📩 Received ${req.method} Request: ${req.url}`);
    console.log("🔹 Body:", req.body);
    next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use('/api/auth', authRoutes);

// Serve index.html as the default page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
