const express = require("express");
const statusController = require("../controllers/statusController");

const router = express.Router();

router.post("/add-status", statusController.addStatus);
router.post("/get-user-status", statusController.getUserStatus);

module.exports = router;
