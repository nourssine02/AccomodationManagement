const express = require('express')
const router = express.Router();


const { getRooms, newRoom, getSingleRoom, updateRoom, deleteRoom } = require('../controllers/roomController')


router.route('/rooms').get(getRooms);

router.route('/room/:id').get(getSingleRoom);

router.route('/admin/room/new').post(newRoom);

router.route('/admin/room/:id')
    .put(updateRoom)
    .delete(deleteRoom);


module.exports = router;  