/**
 * TODO: Need to refactor
 */

var express = require("express");
var router = express.Router();
var User = require("../models/userModel");
var jwt = require("jsonwebtoken");
var bycrypt = require("bcryptjs");

router.post("/", async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).populate('roles');
  if (!user) {
    return res.json({ success: false, error: "User Not Found" });
  }
  if (user && password) {
    const valid = await bycrypt.compare(password, user.password);
    if (valid) {
      const jwtObject = {
        id: user._id,
        profile: user.profile,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        employeeId: user.employeeId,
        createdDate: user.createdDate,
        admin: user.admin,
        status: user.status,
      };
      const isAdmin = user.roles.map(({name}) => name).includes('Admin')
      const token = jwt.sign(jwtObject, process.env.JWT_SECRET);
      if (res.status(201)) {
        return res.json({
          success: true,
          data: { token: token, admin: isAdmin },
        });
      } else {
        return res.json({ success: false, error: "error" });
      }
    }
  }
  res.json({ success: false, error: "Invalid Password" });
});

module.exports = router;
