const router = require('express').Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')

const { logoutUser, registerUser, loginUser, allUsers, getuserDetails, updateUser, deleteUser } = require('../controllers/userController');



router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);


router.route("/admin/users").get(allUsers);
router.route("/admin/user/:id")
    .get(isAuthenticatedUser, authorizeRoles('admin'), getuserDetails)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)



module.exports = router; 