const express =require('express');
const { registeruser, authUser } = require('../controller/userController');
const router = express.Router();
router.route("/").post(registeruser);
router.post("/login", authUser);
module.exports=router
