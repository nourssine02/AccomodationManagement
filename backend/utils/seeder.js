const Room = require('../models/roomModel');
const Booking = require ('../models/bookingModel')
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');


const rooms = require('../data/room.json');

const bookings = require('../data/booking.json')


//Setting dotenv file
dotenv.config({path: './config/config.env'})


connectDatabase();

const seedRooms = async () =>{
    try {
        await Room.deleteMany();
        console.log('Rooms are deleted');

        await Room.insertMany(rooms)
        console.log('All Rooms are added ')
        
        process.exit();

    } catch(error){
        console.log(error.message);
        process.exit();
    }
}
const seedBookings = async () => {
    try {
        await Booking.deleteMany();
        console.log('Bookings are deleted');

        await Booking.insertMany(bookings)
        console.log('All Bookings are added ')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}


//seedRooms()
//seedBookings()