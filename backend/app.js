const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/errors');
const cookieParser = require('cookie-parser');
const cors  = require('cors');


app.use(express.json());
// app.use(cookieParser()); 
 app.use(cors());

//imports all routes

const rooms = require('./routes/roomRoutes');
const userRoutes = require('./routes/userRoutes')

app.use('/api/v1', rooms);
app.use('/api/v1', userRoutes);

//middleware to handle errors
app.use(errorMiddleware);

module.exports = app 