const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');

const databaseConnect = require('./config/database')();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(process.env.PORT, () => console.log(`Server is running on port port ${process.env.PORT}!`));