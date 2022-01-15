const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const userRoutes = require('./api/users/user.router');
const noteRoutes = require('./api/notes/note.router');
const newsRoutes = require('./api/news/news.router');
const courseRoutes = require('./api/courses/course.route');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'api/views'));

const db = process.env.MONGODB_URL;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/course', courseRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

module.exports = app;
