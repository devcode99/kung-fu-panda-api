/**
 * TODO: Need to refactor
 */

var express = require("express");
var router = express.Router();
var Leave = require("../Model/leave");

router.post("/create", async (req, res, next) => {
  try {
    await Leave.create({
     // code for added leave
    });
    res.send({ success: true });
  } catch (error) {
    res.send({
      success: false,
      error: error,
    });
  }
});

module.exports = router;
