const User = require("../models/userModel");

async function validateEmail(req, res, next) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ success: false, error: "User already exists" });
    } else {
      return res.json({ success: true });
    }
  } catch (error) {
    next(error);
  }
}

async function validateEmployeeId(req, res, next) {
  try {
    const { employeeId } = req.body;
    const user = await User.findOne({ employeeId });
    if (user) {
      return res.json({
        success: false,
        error: "Employee ID already exists",
      });
    } else {
      return res.json({ success: true });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  validateEmail,
  validateEmployeeId,
};
