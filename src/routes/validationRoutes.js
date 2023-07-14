const express = require("express");
const validationController = require("../controllers/validationController");

const router = express.Router();

router.post("/validate-email", validationController.validateEmail);
router.post("/validate-employee-id", validationController.validateEmployeeId);

module.exports = router;
