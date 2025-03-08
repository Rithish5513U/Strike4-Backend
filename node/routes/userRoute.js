const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { authMiddleware } = require("../middleware/authMiddleware");


router.post("/register",userController.createUser);
router.post("/login",userController.verifyUser);
router.get("/dashboard",authMiddleware,userController.getDashboard);
router.post("/financial-insights", authMiddleware, userController.getFinancialInsights);


module.exports = router;