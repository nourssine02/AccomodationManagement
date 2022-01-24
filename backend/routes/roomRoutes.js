const express = require('express')
const router = express.Router();



const { getRooms, newRoom, getSingleRoom, updateRoom, deleteRoom, createRoomReview, getRoomReviews, deleteReview } = require('../controllers/roomController')

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')




router.route('/rooms').get(getRooms);

router.route('/room/:id').get(getSingleRoom);

router.route('/admin/room/new').post(isAuthenticatedUser, authorizeRoles('admin'), newRoom);

router.route('/admin/room/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateRoom)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteRoom);

router.route('/review').put(isAuthenticatedUser, createRoomReview)
router.route('/reviews').get(isAuthenticatedUser, getRoomReviews) 
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)



module.exports = router;  