const express =require('express');
const { registeruser, authUser, allUsers } = require('../controller/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();
router.route("/").post(registeruser).get(protect,allUsers)
router.post("/login", authUser);
module.exports=router
