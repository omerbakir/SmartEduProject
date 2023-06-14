const express = require("express")
const authController = require("../controllers/authController")
const authMiddileware = require("../middlewares/authMiddlewares")


const router = express.Router()

router.route("/signup").post(authController.createUser)
router.route("/login").post(authController.loginUser)
router.route("/logout").get(authController.logoutUser)
router.route("/dashboard").get(authMiddileware, authController.getDashboardPage)

module.exports = router