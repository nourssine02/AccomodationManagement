const express = require('express')
const router = express.Router();


const { getRooms, newRoom, getSingleRoom, updateRoom, deleteRoom } = require('../controllers/roomController')

const { isAuthenticatedUser , authorizeRoles} = require('../middleware/auth')

router.route('/rooms').get(getRooms);

router.route('/room/:id').get(getSingleRoom);

router.route('/admin/room/new').post(isAuthenticatedUser, authorizeRoles('admin'), newRoom);

router.route('/admin/room/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateRoom)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteRoom);


module.exports = router;  