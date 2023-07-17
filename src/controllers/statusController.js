const User = require("../models/userModel");

const addStatus = async (req, res, next) => {
  try {
    const { id, status } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { status: status },
      { new: true }
    );
    res.send({ success: user ? true : false });
  } catch (error) {
    res.send({ success: false, error: error });
  }
};

const getUserStatus = async (req, res, next) => {
  try {
    const { id } = req.body;
    const user = await User.findById(id);
    res.send({ success: user ? true : false, data: user.status });
  } catch (error) {
    res.send({ success: false, error: error });
  }
};

module.exports = {
  addStatus,
  getUserStatus,
};
