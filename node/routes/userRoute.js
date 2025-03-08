const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { authMiddleware } = require("../middleware/authMiddleware");


router.post("/register",userController.createUser);
router.post("/login",userController.verifyUser);
router.get("/dashboard",authMiddleware,userController.getDashboard);


module.exports = router;