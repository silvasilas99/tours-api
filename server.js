const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');

// Importing routes
const tourRoutes = require('./routes/tour.routes');

// Configuration methods
const databaseConnect = require('./config/database')();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// Project routes
app.use('/api/tours', tourRoutes);

app.listen(process.env.PORT, () => console.log(`Server is running on port port ${process.env.PORT}!`));