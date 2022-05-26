//
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root path GET request that respond with the unique html file to be used by Vue SPA
app.get('/', (req, res) => res.sendFile('/public/index.html', { root: __dirname }));

// Set the public folder that can be accessed by the client
app.use(express.static(path.join(__dirname, 'public')));

