const express = require('express');



const app = express();

const errorMiddleware = require('./middleware/errors');


app.use(express.json());
 

//imports all routes

const rooms = require('./routes/roomRoutes');
const userRoutes = require('./routes/userRoutes')

app.use('/api/v1', rooms);
app.use('/api/v1', userRoutes);

//middleware to handle errors
app.use(errorMiddleware);

module.exports = app 