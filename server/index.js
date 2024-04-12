// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');

const app = express();


require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

console.log("hello");
console.log(process.env.JWT_SECRET);

// Connect to MongoDB
mongoose.connect('mongodb+srv://rexsparsh:sparsh@cluster.s0kzunf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/auth', authRoutes);
// app.use('/form', formRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
