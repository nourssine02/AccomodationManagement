const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/errors');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
//imports all routes

const rooms = require('./routes/roomRoutes');
const userRoutes = require('./routes/userRoutes');
const booking = require('./routes/bookingRoutes');


app.use('/api/v1', rooms);
app.use('/api/v1', userRoutes);
app.use('/api/v1', booking);


//middleware to handle errors
app.use(errorMiddleware);



//Upload
app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file upladed' })
    }
    const file = req.files.file;
    file.mv(`${__dirname}/frontend/Assets/images/${file.name}`)
    res.json({ fileName: file.name, filePath: `/frontend/src/Assets/images/${file.name}` });
})

module.exports = app 