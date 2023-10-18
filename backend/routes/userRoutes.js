const express =require('express');
const { registeruser } = require('../controller/userController');
const router = express.Router();
router.route("/").post(registeruser);
//router.post("/login", authUser);
module.exports=router
