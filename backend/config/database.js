const mongoose = require('mongoose');


// remove this mongoose.connect and move the option object to the above mongoose.connect

const connectDatabase = () => {

    //mongoose.connect(process.env.DB_LOCAL_URI);
    mongoose.connect("mongodb://localhost:27017/accommodation", {
         useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(con => {
        console.log(`MongoDB Database Connected with HOST: ${con.connection.host}`)
    })



}



module.exports = connectDatabase;