const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
const Role = require('../models/roleModel');

async function getAuthenticatedUser(req, res) {
  try {
    const token = req.body.token;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    const userData = await User.findOne({ email: user.email }).lean();
    const roleIds = userData.roles;
    const roles = await Role.find({ _id: { $in: roleIds } }).populate('permissions').lean();
    const permissions = roles.flatMap(({ permissions }) => permissions);
    res.json({ success: true, data: { ...user, ...userData, roles, permissions } });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

module.exports = {
  getAuthenticatedUser,
};
