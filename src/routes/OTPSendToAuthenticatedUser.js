/**
 * TODO: Need to refactor
 */

var express = require("express");
var router = express.Router();
const stytch = require("stytch");
const dotenv = require("dotenv")
dotenv.config()

const client = new stytch.Client({
  project_id: process.env.PROJECT_ID,
  secret: process.env.PROJECT_SECRET_ID,
  env: stytch.envs.test,
});

router.post("/send-otp", async (req, res, next) => {
  try {
    const { phone_number } = req.body;
    const params = { phone_number };

    const response = await client.otps.sms.loginOrCreate(params);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.post("/verify-otp", async (req, res, next) => {
  try {
    const { method_id, code } = req.body;
    const response = await client.otps.authenticate({ method_id, code });
    if (response.status_code === 200) {
      res.json({ success: true });
    } else {
      res.json({ success: false, error: "Not verified user" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
