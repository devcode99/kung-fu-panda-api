const express = require("express");
const authController = require("../controllers/authenticateUserController");

const router = express.Router();

router.post("/authenticated-user", authController.getAuthenticatedUser);

module.exports = router;
